import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/auth-guard.service';
import { HomepageComponent } from './user/homepage/homepage.component';
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
    path: 'homepage', component: HomepageComponent, canActivate: [AuthGuardService]
  },
  {
    path: '', redirectTo: '/login', pathMatch:  'full'
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
