import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SendNotificationsComponent } from './user/send-notifications/send-notifications.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'signup', component: UserComponent,
    children: [{
      path: '', component: SignUpComponent
    }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{
      path: '', component: LoginComponent
    }]
  },
  {
    path: 'sendNotifications', component: UserComponent,
    children: [{
      path: '', component: SendNotificationsComponent
    }]
  },
  {
    path: '', redirectTo: '/sendNotifications', pathMatch:  'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
