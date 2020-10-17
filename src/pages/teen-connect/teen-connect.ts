import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RecommendationsPage } from '../recommendations/recommendations';

@Component({
  selector: 'page-teen-connect',
  templateUrl: 'teen-connect.html'
})
export class TeenConnectPage {

  constructor(public navCtrl: NavController) {
  }
  goToRecommendations(params){
    if (!params) params = {};
    this.navCtrl.push(RecommendationsPage);
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
