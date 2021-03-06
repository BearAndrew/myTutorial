import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgTutorialComponent } from './ng-tutorial/ng-tutorial.component';
import { CssTutorialComponent } from './css-tutorial/css-tutorial.component';
import { OtherTutorialComponent } from './other-tutorial/other-tutorial.component';
// ng tutorial
import { ValidatorComponent } from './ng-tutorial/validator/validator.component';
import { ReactFormComponent } from './ng-tutorial/react-form/react-form.component';
import { GoogleSheetApiComponent } from './ng-tutorial/google-sheet-api/google-sheet-api.component';
import { ChartComponent } from './ng-tutorial/chart/chart.component';
import { DeploymentComponent } from './ng-tutorial/deployment/deployment.component';
import { GoogleMapApiComponent } from './ng-tutorial/google-map-api/google-map-api.component';
import { FirebaseComponent } from './ng-tutorial/firebase/firebase.component';
import { PwaComponent } from './ng-tutorial/pwa/pwa.component';

// css tutorial
import { CssFrameComponent } from './css-tutorial/css-frame/css-frame.component';
import { SidebarTutorialComponent } from './css-tutorial/sidebar-tutorial/sidebar-tutorial.component';
import { CarouselTutorialComponent } from './css-tutorial/carousel-tutorial/carousel-tutorial.component';
import { ImageComponent } from './css-tutorial/image/image.component';

// other-tutorial
import { GitComponent } from './other-tutorial/git/git.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  // ng-tutorial
  { path: 'ng-tutorial', children: [
    { path: '', pathMatch: 'full', component: NgTutorialComponent },
    { path: 'validator', pathMatch: 'full', component: ValidatorComponent },
    { path: 'react-form', pathMatch: 'full', component: ReactFormComponent },
    { path: 'google-sheet-api', pathMatch: 'full', component: GoogleSheetApiComponent },
    { path: 'chart', pathMatch: 'full', component: ChartComponent },
    { path: 'deployment', pathMatch: 'full', component: DeploymentComponent },
    { path: 'google-map-api', pathMatch: 'full', component: GoogleMapApiComponent },
    { path: 'firebase', pathMatch: 'full', component: FirebaseComponent },
    { path: 'pwa', pathMatch: 'full', component: PwaComponent },
  ]},
  // css-tutorial
  { path: 'css-tutorial', children: [
    { path: '', pathMatch: 'full', component: CssTutorialComponent },
    { path: 'css-frame', pathMatch: 'full', component: CssFrameComponent },
    { path: 'sidebar-tutorial', pathMatch: 'full', component: SidebarTutorialComponent },
    { path: 'carousel-tutorial', pathMatch: 'full', component: CarouselTutorialComponent },
    { path: 'image', pathMatch: 'full', component: ImageComponent },
  ]},
  // other-tutorial
  { path: 'other-tutorial', children: [
    { path: '', pathMatch: 'full', component: OtherTutorialComponent },
    { path: 'git', pathMatch: 'full', component: GitComponent },
  ]},
  { path: '**', component: AppComponent },
];

@NgModule({
  // scrollPositionRestoration : scroll to top
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
