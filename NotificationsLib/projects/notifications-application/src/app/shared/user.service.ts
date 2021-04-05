import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { environment } from '../../environments/environment';
import {User} from './user';
import { NotificationsModel } from './notifications-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private logInErrorSubject = new Subject<string>();
  private isAuthenticated = false;
  private token: any;
  private tokenTimer: any;
  private userId: any;
  private authStatusListener = new Subject<boolean>();

  private notifications: NotificationsModel [] = [];
  private notificationsUpdated = new Subject<{notifications: NotificationsModel[], maxNotifications: number}>();
  userN: any;
  message: any;
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };
  constructor(private http: HttpClient, private router: Router) { }
  public getLoginErrors(): Subject <string> {
    return this.logInErrorSubject;
  }
  getToken() {
    return localStorage.getItem('token');
  }

  getName() {
    return localStorage.getItem('username');
  }
  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getUserId() {
    return this.userId;
  }
  getMessage() {
    return this.message;
  }

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/user/register',user);
  }


  login(email: string, password: string) {
    return this.http.post<{token: string, expiresIn: number, userId: string, username: string}>(
        environment.apiBaseUrl+ '/user/login',
        {email, password})
        .subscribe( response => {
          const token = response.token;
          this.token = token;
          if (token) {
            const expiresInDuration = response.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.isAuthenticated = true;
            this.userId = response.userId;
            this.userN = response.username;
            this.authStatusListener.next(true);
            const now = new Date();
            const expirationDate = new Date(now.getTime() + (expiresInDuration * 100000));
            this.saveAuthData( token, expirationDate,
                this.userId, this.userN);
            this.message = '';
            this.logInErrorSubject.next(this.message);
            this.router.navigate(['/homepage']).then();
          }
        } , error => {
          this.message = 'invalid Email or Password';
          this.logInErrorSubject.next(this.message);
        });

  }

  private setAuthTimer( duration: number ) {
    this.tokenTimer = setTimeout(() => {
          this.logout();
        },
        duration * 100000);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string, userNam: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('username', userNam);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.userId = null;
    this.userN = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);

  }

  addNotification(header: string, body: string, type: string)
  {
      return this.http.post(environment.apiBaseUrl+'/user/saveNotification',
          {header, body, type});
  }



  getNotifications() {
    this.http
        .get<{message: string, notifications: any, maxNotifications: number}>(
            environment.apiBaseUrl+'/user/getNotifications'
        )
        .pipe(map((notificationData) => {
            return { notification: notificationData.notifications.map((notification: { _id: any; header: any; body: any; type: any;}) => {
                    return {
                        _id: notification._id,
                        header: notification.header,
                        body: notification.body,
                        type: notification.type
                    };
                }), maxNotifications: notificationData.maxNotifications  };
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
    return this.http.delete(environment.apiBaseUrl+'/user/deleteNotification/' + id);
}


}