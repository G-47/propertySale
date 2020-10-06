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
import { PageComponent } from './components/auctionsPage/page/page.component';
import { ManagerComponent } from './components/manager/manager.component';
import { NewAdminComponent } from './components/manager/admins/new-admin/new-admin.component';
import { OctionComponent } from './components/viewAd/oction/oction.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'viewAd', component: DirectComponent },
  { path: 'viewAuctionAd', component: OctionComponent },
  { path: 'postAd', component: PostAdComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'auctions', component: PageComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'newAdmin', component: NewAdminComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
