import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgTutorialComponent } from './ng-tutorial/ng-tutorial.component';
import { CssTutorialComponent } from './css-tutorial/css-tutorial.component';
import { ValidatorComponent } from './ng-tutorial/validator/validator.component';
import { HomeComponent } from './home/home.component';
import { ReactFormComponent } from './ng-tutorial/react-form/react-form.component';
import { CssFrameComponent } from './css-tutorial/css-frame/css-frame.component';
import { SidebarTutorialComponent } from './css-tutorial/sidebar-tutorial/sidebar-tutorial.component';
import { GoogleSheetApiComponent } from './ng-tutorial/google-sheet-api/google-sheet-api.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'ng-tutorial', pathMatch: 'full', component: NgTutorialComponent },
  { path: 'css-tutorial/', pathMatch: 'full', component: CssTutorialComponent },
  { path: 'ng-tutorial/validator', pathMatch: 'full', component: ValidatorComponent },
  { path: 'ng-tutorial/react-form', pathMatch: 'full', component: ReactFormComponent },
  { path: 'ng-tutorial/google-sheet-api', pathMatch: 'full', component: GoogleSheetApiComponent },
  { path: 'css-tutorial/css-frame', pathMatch: 'full', component: CssFrameComponent },
  { path: 'css-tutorial/sidebar-tutorial', pathMatch: 'full', component: SidebarTutorialComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
