import { RouteGuardService } from './../route-guard.service';
import { ViewHouseComponent } from './components/view-house/view-house.component';
import { ViewLandComponent } from './components/view-land/view-land.component';
import { DirectLandPostByAdminComponent } from './components/direct-land-post-by-admin/direct-land-post-by-admin.component';
import { DirectHousePostByAdminComponent } from './components/direct-house-post-by-admin/direct-house-post-by-admin.component';
import { ReviewHouseComponent } from './components/review-house/review-house.component';
import { ReviewLandComponent } from './components/review-land/review-land.component';
import { AdminDashboardComponent } from './components/Dashboard/admin-dashboard/admin-dashboard.component';
import { PostAdComponent } from './components/post-ad/post-ad.component';
import { PostAuctionAdComponent } from './components/post-auction-ad/post-auction-ad.component';
import { TestComponent } from './components/test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/homePage/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { DirectComponent } from './components/viewAd/direct/direct.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageComponent } from './components/auctionsPage/page/page.component';
import { ManagerComponent } from './components/manager/manager.component';
import { NewAdminComponent } from './components/manager/admins/new-admin/new-admin.component';
import { OctionComponent } from './components/viewAd/oction/oction.component';
import { AuctionLandComponent } from './components/viewAd/auction-land/auction-land.component';
import { NewAuctionComponent } from './components/manager/auction/new-auction/new-auction.component';
import { PaymentGatewayComponent } from './components/payment-gateway/payment-gateway.component';
import { UserDashboardComponent } from './components/Dashboard/user-dashboard/user-dashboard.component';
import { ReviewUserComponent } from './components/review-user/review-user.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { PostAuctionLandAdComponent } from './components/post-auction-land-ad/post-auction-land-ad.component';
import { PostAuctionHouseAdComponent } from './components/post-auction-house-ad/post-auction-house-ad.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'viewAuctionHouseAd', component: OctionComponent },
  { path: 'viewAuctionLandAd', component: AuctionLandComponent },
  {
    path: 'postAd',
    component: PostAdComponent,
    canActivate: [RouteGuardService],
    data: { type: [0] },
  },
  {
    path: 'postAuctionLandAd',
    component: PostAuctionLandAdComponent,
    canActivate: [RouteGuardService],
    data: { type: [1, 2] },
  },
  {
    path: 'postAuctionHouseAd',
    component: PostAuctionHouseAdComponent,
    canActivate: [RouteGuardService],
    data: { type: [1, 2] },
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'auctions', component: PageComponent },
  {
    path: 'managerDashboard',
    component: ManagerComponent,
    canActivate: [RouteGuardService],
    data: { type: [2] },
  },
  {
    path: 'newAdmin',
    component: NewAdminComponent,
    canActivate: [RouteGuardService],
    data: { type: [2] },
  },
  {
    path: 'payment',
    component: PaymentGatewayComponent,
    canActivate: [RouteGuardService],
    data: { type: [0, 1, 2] },
  },
  { path: 'test', component: TestComponent },
  {
    path: 'adminDashboard',
    component: AdminDashboardComponent,
    canActivate: [RouteGuardService],
    data: { type: [1] },
  },
  {
    path: 'reviewLand/:id',
    component: ReviewLandComponent,
    canActivate: [RouteGuardService],
    data: { type: [1] },
  },
  {
    path: 'reviewHouse/:id',
    component: ReviewHouseComponent,
    canActivate: [RouteGuardService],
    data: { type: [1] },
  },
  {
    path: 'reviewUser/:id',
    component: ReviewUserComponent,
    canActivate: [RouteGuardService],
    data: { type: [1] },
  },
  { path: 'viewLand/:id', component: ViewLandComponent },
  { path: 'viewHouse/:id', component: ViewHouseComponent },
  {
    path: 'editprofile',
    component: EditprofileComponent,
    canActivate: [RouteGuardService],
    data: { type: [0, 1, 2] },
  },

  {
    path: 'directHousePostByAdmin',
    component: DirectHousePostByAdminComponent,
    canActivate: [RouteGuardService],
    data: { type: [1, 2] },
  },
  {
    path: 'directLandPostByAdmin',
    component: DirectLandPostByAdminComponent,
    canActivate: [RouteGuardService],
    data: { type: [1, 2] },
  },
  {
    path: 'userDashboard',
    component: UserDashboardComponent,
    canActivate: [RouteGuardService],
    data: { type: [0] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
