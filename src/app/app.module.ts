import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: 'recover-password', component: RecoverPasswordComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    CreateAccountComponent,
    RecoverPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
