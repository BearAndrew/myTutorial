import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './nav-component/footer/footer.component';
import { SidebarComponent } from './nav-component/sidebar/sidebar.component';
import { SidebarRightComponent } from './nav-component/sidebar-right/sidebar-right.component';
import { NavbarComponent } from './nav-component/navbar/navbar.component';
import { TestComponent } from './test/test.component';

// ng-tutorial
import { NgTutorialComponent } from './ng-tutorial/ng-tutorial.component';
import { ValidatorComponent } from './ng-tutorial/validator/validator.component';
import { ReactFormComponent } from './ng-tutorial/react-form/react-form.component';
import { GoogleSheetApiComponent } from './ng-tutorial/google-sheet-api/google-sheet-api.component';
import { ChartComponent } from './ng-tutorial/chart/chart.component';
import { DeploymentComponent } from './ng-tutorial/deployment/deployment.component';
import { GoogleMapApiComponent } from './ng-tutorial/google-map-api/google-map-api.component';
import { FirebaseComponent } from './ng-tutorial/firebase/firebase.component';

// css-tutorial
import { CssTutorialComponent } from './css-tutorial/css-tutorial.component';
import { CssFrameComponent } from './css-tutorial/css-frame/css-frame.component';
import { SidebarTutorialComponent } from './css-tutorial/sidebar-tutorial/sidebar-tutorial.component';
import { CarouselTutorialComponent } from './css-tutorial/carousel-tutorial/carousel-tutorial.component';
import { ImageComponent } from './css-tutorial/image/image.component';

// other-tutorial
import { OtherTutorialComponent } from './other-tutorial/other-tutorial.component';
import { GitComponent } from './other-tutorial/git/git.component';
import { RouteComponent } from './ng-tutorial/route/route.component';
import { PwaComponent } from './ng-tutorial/pwa/pwa.component';

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
    TestComponent,
    CarouselTutorialComponent,
    ChartComponent,
    DeploymentComponent,
    ImageComponent,
    GoogleMapApiComponent,
    OtherTutorialComponent,
    GitComponent,
    RouteComponent,
    FirebaseComponent,
    PwaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapAPI.API_KEY
    }),
    AgmDirectionModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
