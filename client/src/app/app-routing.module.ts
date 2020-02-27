import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginPageComponent } from "./login-page/login-page.component";
import { SiteLayoutComponent, AuthLayoutComponent } from "./shared/layouts";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterPageComponent
      }
    ]
  },
  {
    path: 'home',
    component: SiteLayoutComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
