import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TeenConnectPage } from '../pages/teen-connect/teen-connect';
import { AboutPage } from '../pages/about/about';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AddDetailsPage } from '../pages/add-details/add-details';
import { AddDetails2Page } from '../pages/add-details2/add-details2';
import { RecommendationsPage } from '../pages/recommendations/recommendations';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TeenConnectPage,
    AboutPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    AddDetailsPage,
    AddDetails2Page,
    RecommendationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TeenConnectPage,
    AboutPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    AddDetailsPage,
    AddDetails2Page,
    RecommendationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}