import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {

  isUserAuthenticated = false;
  showform = false;
  shownotifications = false;
  private authListenerSubs: Subscription;
  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
    this.isUserAuthenticated = this.userService.getIsAuth();
    
        if (this.isUserAuthenticated) {
          this.showform = true;
          this.shownotifications = false;
          this.isUserAuthenticated = true;
        } else {
          this.isUserAuthenticated = false;
          this.router.navigate(['/login']).then();
        }

      this.authListenerSubs = this.userService
        .getAuthStatusListener()
        .subscribe(isAuthenticated => {
          this.isUserAuthenticated = isAuthenticated;
        });
  }

  onNotify() {
    this.showform = true;
    this.shownotifications = false;
  }

  onDashboard() {
    this.showform = false;
    this.shownotifications = true;
  }

  onLogout() {
    this.isUserAuthenticated = false;
    this.userService.logout();
  }

  ngOnDestroy() {
    this.isUserAuthenticated = false;
    this.authListenerSubs.unsubscribe();
  }


}
