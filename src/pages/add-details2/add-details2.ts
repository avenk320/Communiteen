import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeenConnectPage } from '../teen-connect/teen-connect';
import { RecommendationsPage } from '../recommendations/recommendations';

@Component({
  selector: 'page-add-details2',
  templateUrl: 'add-details2.html'
})
export class AddDetails2Page {

  constructor(public navCtrl: NavController) {
  }
  goToTeenConnect(params){
    if (!params) params = {};
    this.navCtrl.push(TeenConnectPage);
  }goToRecommendations(params){
    if (!params) params = {};
    this.navCtrl.push(RecommendationsPage);
  }
}
