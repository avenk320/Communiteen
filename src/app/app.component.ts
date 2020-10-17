import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TeenConnectPage } from '../pages/teen-connect/teen-connect';
import { RecommendationsPage } from '../pages/recommendations/recommendations';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AddDetailsPage } from '../pages/add-details/add-details';
import { AddDetails2Page } from '../pages/add-details2/add-details2';


import { WelcomePage } from '../pages/welcome/welcome';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = WelcomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToTeenConnect(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TeenConnectPage);
  }goToRecommendations(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RecommendationsPage);
  }goToAbout(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AboutPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignupPage);
  }goToAddDetails(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AddDetailsPage);
  }goToAddDetails2(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AddDetails2Page);
  }
}
