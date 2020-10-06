import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThreeSixtyModule } from '@mediaman/angular-three-sixty';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/homePage/home/home.component';
import { CardComponent } from './components/homePage/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DirectComponent } from './components/viewAd/direct/direct.component';
import { OctionComponent } from './components/viewAd/oction/oction.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MypropertiesComponent } from './components/profile/myproperties/myproperties.component';
import { PageComponent } from './components/auctions/page/page.component';
import { OngoingComponent } from './components/auctions/cards/ongoing/ongoing.component';
import { OtherComponent } from './components/auctions/cards/other/other.component';
import { AuthService } from './services/auth.service';
import { AdminsService } from './services/admins.service';
import { ManagerComponent } from './components/manager/manager.component';
import { AdminsComponent } from './components/manager/admins/admins.component';
import { AuctionComponent } from './components/manager/auction/auction.component';
import { ActivityLogsComponent } from './components/manager/activity-logs/activity-logs.component';
import { ReportsComponent } from './components/manager/reports/reports.component';
import { NewAdminComponent } from './components/manager/admins/new-admin/new-admin.component';
import { TestComponent } from './components/test/test.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { ThreeSixtyImageComponent } from './components/three-sixty-image/three-sixty-image.component';
import { NewAuctionComponent } from './components/manager/auction/new-auction/new-auction.component';
import { MapComponent } from './components/map/map.component';
import { PostAdComponent } from './components/post-ad/post-ad.component';
import { PaymentGatewayComponent } from './components/payment-gateway/payment-gateway.component';
import { AdminDashboardComponent } from './components/Dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/Dashboard/user-dashboard/user-dashboard.component';

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
    FooterComponent,
    ProfileComponent,
    MypropertiesComponent,
    PageComponent,
    OngoingComponent,
    OtherComponent,
    ManagerComponent,
    AdminsComponent,
    AuctionComponent,
    ActivityLogsComponent,
    ReportsComponent,
    NewAdminComponent,
    TestComponent,
    ImageUploaderComponent,
    ThreeSixtyImageComponent,
    NewAuctionComponent,
    MapComponent,
    PostAdComponent,
    PaymentGatewayComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ThreeSixtyModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    CommonModule,
    GoogleMapsModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true,
    },
    AdminsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
