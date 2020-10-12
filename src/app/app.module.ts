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
import { NavbarComponent } from './components/navbar/navbar.component';
import { DirectComponent } from './components/viewAd/direct/direct.component';
import { OctionComponent } from './components/viewAd/oction/oction.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MypropertiesComponent } from './components/profile/myproperties/myproperties.component';
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
import { PageComponent } from './components/auctionsPage/page/page.component';
import { AuctionCardComponent } from './components/auctionsPage/auction-card/auction-card.component';
import { NewAuctionComponent } from './components/manager/auction/new-auction/new-auction.component';
import { MapComponent } from './components/map/map.component';
import { PostAdComponent } from './components/post-ad/post-ad.component';
import { PaymentGatewayComponent } from './components/payment-gateway/payment-gateway.component';
import { AdminDashboardComponent } from './components/Dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/Dashboard/user-dashboard/user-dashboard.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { DirectLandCardComponent } from './components/cards/direct-land-card/direct-land-card.component';
import { DirectHouseCardComponent } from './components/cards/direct-house-card/direct-house-card.component';
import { ReviewLandComponent } from './components/review-land/review-land.component';
import { ReviewHouseComponent } from './components/review-house/review-house.component';
import { DirectLandPostByAdminComponent } from './components/direct-land-post-by-admin/direct-land-post-by-admin.component';
import { DirectHousePostByAdminComponent } from './components/direct-house-post-by-admin/direct-house-post-by-admin.component';
import { UserCardComponent } from './components/cards/user-card/user-card.component';
import { ReviewUserComponent } from './components/review-user/review-user.component';
import { PostAuctionAdComponent } from './components/post-auction-ad/post-auction-ad.component';
import { AuctionLandComponent } from './components/viewAd/auction-land/auction-land.component';
import { ViewHouseComponent } from './components/view-house/view-house.component';
import { ViewLandComponent } from './components/view-land/view-land.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DirectComponent,
    OctionComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    ProfileComponent,
    MypropertiesComponent,
    ManagerComponent,
    AdminsComponent,
    AuctionComponent,
    ActivityLogsComponent,
    ReportsComponent,
    NewAdminComponent,
    TestComponent,
    ImageUploaderComponent,
    ThreeSixtyImageComponent,
    PageComponent,
    AuctionCardComponent,
    NewAuctionComponent,
    MapComponent,
    PostAdComponent,
    PaymentGatewayComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    CountDownComponent,
    DirectLandCardComponent,
    DirectHouseCardComponent,
    ReviewLandComponent,
    ReviewHouseComponent,
    DirectLandPostByAdminComponent,
    DirectHousePostByAdminComponent,
    UserCardComponent,
    ReviewUserComponent,
    PostAuctionAdComponent,
    AuctionLandComponent,
    ViewHouseComponent,
    ViewLandComponent,
    EditprofileComponent,
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
