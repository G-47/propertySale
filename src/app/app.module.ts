import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/homePage/home/home.component';
import { CardComponent } from './components/homePage/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DirectComponent } from './components/viewAd/direct/direct.component';
import { OctionComponent } from './components/viewAd/oction/oction.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    NavbarComponent,
    DirectComponent,
    OctionComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
