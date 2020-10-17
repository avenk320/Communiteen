import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddDetails2Page } from '../add-details2/add-details2';
import { TeenConnectPage } from '../teen-connect/teen-connect';
import { RecommendationsPage } from '../recommendations/recommendations';

@Component({
  selector: 'page-add-details',
  templateUrl: 'add-details.html'
})
export class AddDetailsPage {

  constructor(public navCtrl: NavController) {
  }
  goToAddDetails2(params){
    if (!params) params = {};
    this.navCtrl.push(AddDetails2Page);
  }goToTeenConnect(params){
    if (!params) params = {};
    this.navCtrl.push(TeenConnectPage);
  }goToRecommendations(params){
    if (!params) params = {};
    this.navCtrl.push(RecommendationsPage);
  }
}
