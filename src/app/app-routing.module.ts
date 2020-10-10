import { ViewHouseComponent } from './components/view-house/view-house.component';
import { ViewLandComponent } from './components/view-land/view-land.component';
import { DirectLandPostByAdminComponent } from './components/direct-land-post-by-admin/direct-land-post-by-admin.component';
import { DirectHousePostByAdminComponent } from './components/direct-house-post-by-admin/direct-house-post-by-admin.component';
import { ReviewHouseComponent } from './components/review-house/review-house.component';
import { ReviewLandComponent } from './components/review-land/review-land.component';
import { AdminDashboardComponent } from './components/Dashboard/admin-dashboard/admin-dashboard.component';
import { PostAdComponent } from './components/post-ad/post-ad.component';
import { TestComponent } from './components/test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/homePage/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { DirectComponent } from './components/viewAd/direct/direct.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageComponent } from './components/auctions/page/page.component';
import { ManagerComponent } from './components/manager/manager.component';
import { NewAdminComponent } from './components/manager/admins/new-admin/new-admin.component';
import { NewAuctionComponent } from './components/manager/auction/new-auction/new-auction.component';
import { PaymentGatewayComponent } from './components/payment-gateway/payment-gateway.component';
import { UserDashboardComponent } from './components/Dashboard/user-dashboard/user-dashboard.component';
import { ReviewUserComponent } from './components/review-user/review-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'viewAd', component: DirectComponent },
  { path: 'postAd', component: PostAdComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'auctions', component: PageComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'newAdmin', component: NewAdminComponent },
  { path: 'payment', component: PaymentGatewayComponent },
  { path: 'test', component: TestComponent },
  { path: 'newAuction', component: NewAuctionComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: 'reviewLand/:id', component: ReviewLandComponent },
  { path: 'reviewHouse/:id', component: ReviewHouseComponent },
  { path: 'reviewUser/:id', component: ReviewUserComponent },
  { path: 'viewLand/:id', component: ViewLandComponent },
  { path: 'viewHouse/:id', component: ViewHouseComponent },
  {
    path: 'directHousePostByAdmin',
    component: DirectHousePostByAdminComponent,
  },
  {
    path: 'directLandPostByAdmin',
    component: DirectLandPostByAdminComponent,
  },
  { path: 'userDashboard', component: UserDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
