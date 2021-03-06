import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { User } from './user';
import { NotificationsModel } from './notifications-model';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as AuthActions from '../shared/auth-store/auth-actions';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private logInErrorSubject = new Subject<string>();
  private isAuthenticated = false;
  private token: any;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();

  private notifications: NotificationsModel[] = [];
  private notificationsUpdated = new Subject<{ notifications: NotificationsModel[], maxNotifications: number }>();
  message: any;
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };
  constructor(private http: HttpClient,
     private router: Router,
     private store: Store<fromApp.Appstate>) { }
  public getLoginErrors(): Subject<string> {
    return this.logInErrorSubject;
  }
  

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getMessage() {
    return this.message;
  }

  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/user/register', user);
  }


  login(email: string, password: string) {
    return this.http.post<{ token: string, expiresIn: number}>(
      environment.apiBaseUrl + '/user/login',
      { email, password })
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        this.store.dispatch(new AuthActions.Signin());
        if (response.token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + (expiresInDuration));
          // this.saveAuthData(token, expirationDate);
          this.message = '';
          this.logInErrorSubject.next(this.message);
          this.store.dispatch(new AuthActions.SetToken(response.token));
          this.router.navigate(['/homepage']).then();
        }
      }, error => {
        this.message = 'invalid Email or Password';
        this.logInErrorSubject.next(this.message);
      });

  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    },
      duration);
  }


  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    // this.clearAuthData();
    this.store.dispatch(new AuthActions.Logout());
    this.router.navigate(['/']);
    this.selectedUser = {
      fullName: '',
      email: '',
      password: ''
    };

  }

  addNotification(header: string, body: string, type: string) {
    return this.http.post(environment.apiBaseUrl + '/user/Notification',
      { header, body, type });
  }



  getNotifications() {
    this.http
      .get<{ message: string, notifications: any, maxNotifications: number }>(
        environment.apiBaseUrl + '/user/Notification'
      )
      .pipe(map((notificationData) => {
        return {
          notification: notificationData.notifications.map((notification: { _id: any; header: any; body: any; type: any; }) => {
            return {
              _id: notification._id,
              header: notification.header,
              body: notification.body,
              type: notification.type
            };
          }), maxNotifications: notificationData.maxNotifications
        };
      }))// change retrieving data
      .subscribe(transformedNotificationsData => {
        this.notifications = transformedNotificationsData.notification;
        this.notificationsUpdated.next({
          notifications: [...this.notifications],
          maxNotifications: transformedNotificationsData.maxNotifications
        }
        );
      });
  }

  getNotificationsUpdateListener() {
    return this.notificationsUpdated.asObservable();
  }



  deleteNotification(id: string) {
    return this.http.delete(environment.apiBaseUrl + '/user/Notification/' + id);
  }

  editNotification(id: string, header: string, body: string, type: string) {

    return this.http.put(environment.apiBaseUrl + '/user/Notification/' + id,
      { header, body, type });
  }

}