import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgTutorialComponent } from './ng-tutorial/ng-tutorial.component';
import { CssTutorialComponent } from './css-tutorial/css-tutorial.component';
// ng tutorial
import { ValidatorComponent } from './ng-tutorial/validator/validator.component';
import { ReactFormComponent } from './ng-tutorial/react-form/react-form.component';
import { GoogleSheetApiComponent } from './ng-tutorial/google-sheet-api/google-sheet-api.component';
import { ChartComponent } from './ng-tutorial/chart/chart.component';
import { DeploymentComponent } from './ng-tutorial/deployment/deployment.component';
import { GoogleMapApiComponent } from './ng-tutorial/google-map-api/google-map-api.component';

// css tutorial
import { CssFrameComponent } from './css-tutorial/css-frame/css-frame.component';
import { SidebarTutorialComponent } from './css-tutorial/sidebar-tutorial/sidebar-tutorial.component';
import { CarouselTutorialComponent } from './css-tutorial/carousel-tutorial/carousel-tutorial.component';
import { ImageComponent } from './css-tutorial/image/image.component';

// other-tutorial
import { OtherTutorialComponent } from './other-tutorial/other-tutorial.component';
import { GitComponent } from './other-tutorial/git/git.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'ng-tutorial', pathMatch: 'full', component: NgTutorialComponent },
  { path: 'css-tutorial', pathMatch: 'full', component: CssTutorialComponent },
  { path: 'other-tutorial', pathMatch: 'full', component: OtherTutorialComponent },
  // ng-tutorial
  { path: 'ng-tutorial/validator', pathMatch: 'full', component: ValidatorComponent },
  { path: 'ng-tutorial/react-form', pathMatch: 'full', component: ReactFormComponent },
  { path: 'ng-tutorial/google-sheet-api', pathMatch: 'full', component: GoogleSheetApiComponent },
  { path: 'ng-tutorial/chart', pathMatch: 'full', component: ChartComponent },
  { path: 'ng-tutorial/deployment', pathMatch: 'full', component: DeploymentComponent },
  { path: 'ng-tutorial/google-map-api', pathMatch: 'full', component: GoogleMapApiComponent },
  // css-tutorial
  { path: 'css-tutorial/css-frame', pathMatch: 'full', component: CssFrameComponent },
  { path: 'css-tutorial/sidebar-tutorial', pathMatch: 'full', component: SidebarTutorialComponent },
  { path: 'css-tutorial/carousel-tutorial', pathMatch: 'full', component: CarouselTutorialComponent },
  { path: 'css-tutorial/image', pathMatch: 'full', component: ImageComponent },
  // other-tutorial
  { path: 'other-tutorial/git', pathMatch: 'full', component: GitComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
