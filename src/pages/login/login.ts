import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeenConnectPage } from '../teen-connect/teen-connect';
import { RecommendationsPage } from '../recommendations/recommendations';
import { SignupPage } from '../signup/signup';
import { AddDetailsPage } from '../add-details/add-details';
import { AddDetails2Page } from '../add-details2/add-details2';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToTeenConnect(params){
    if (!params) params = {};
    this.navCtrl.push(TeenConnectPage);
  }goToRecommendations(params){
    if (!params) params = {};
    this.navCtrl.push(RecommendationsPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToAddDetails(params){
    if (!params) params = {};
    this.navCtrl.push(AddDetailsPage);
  }goToAddDetails2(params){
    if (!params) params = {};
    this.navCtrl.push(AddDetails2Page);
  }
}
