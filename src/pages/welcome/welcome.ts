import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TeenConnectPage } from '../teen-connect/teen-connect';
import { RecommendationsPage } from '../recommendations/recommendations';
import { SignupPage } from '../signup/signup';
import { AddDetailsPage } from '../add-details/add-details';
import { AddDetails2Page } from '../add-details2/add-details2';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToTeenConnect(params){
    if (!params) params = {};
    this.navCtrl.push(TeenConnectPage);
  }goToRecommendations(params){
    if (!params) params = {};
    this.navCtrl.push(RecommendationsPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToAddDetails(params){
    if (!params) params = {};
    this.navCtrl.push(AddDetailsPage);
  }goToAddDetails2(params){
    if (!params) params = {};
    this.navCtrl.push(AddDetails2Page);
  }
}
