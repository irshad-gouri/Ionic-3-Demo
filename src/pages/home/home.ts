import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private dialogs: Dialogs) {

  }

  showAlert(){
 	this.dialogs.alert('Hello', 'ALERT!') 
  }

}
