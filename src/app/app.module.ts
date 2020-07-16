import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgTutorialComponent } from './ng-tutorial/ng-tutorial.component';
import { CssTutorialComponent } from './css-tutorial/css-tutorial.component';
import { ValidatorComponent } from './ng-tutorial/validator/validator.component';
import { HomeComponent } from './home/home.component';
import { ReactFormComponent } from './ng-tutorial/react-form/react-form.component';
import { CssFrameComponent } from './css-tutorial/css-frame/css-frame.component';
import { NavbarComponent } from './nav-component/navbar/navbar.component';
import { FooterComponent } from './nav-component/footer/footer.component';
import { SidebarComponent } from './nav-component/sidebar/sidebar.component';
import { SidebarRightComponent } from './nav-component/sidebar-right/sidebar-right.component';
import { SidebarTutorialComponent } from './css-tutorial/sidebar-tutorial/sidebar-tutorial.component';
import { GoogleSheetApiComponent } from './ng-tutorial/google-sheet-api/google-sheet-api.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NgTutorialComponent,
    CssTutorialComponent,
    ValidatorComponent,
    HomeComponent,
    ReactFormComponent,
    CssFrameComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    SidebarRightComponent,
    SidebarTutorialComponent,
    GoogleSheetApiComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
