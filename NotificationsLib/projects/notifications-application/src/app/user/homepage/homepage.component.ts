import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
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
  toggleRequired = false;
  private authListenerSubs: Subscription;

  @ViewChild('drawer') sidenav: MatSidenav;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 1100) {
      this.sidenav.close();
      this.toggleRequired = true;
    }
    else {
      this.sidenav.open();
      this.toggleRequired = false;
    }
  }

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
