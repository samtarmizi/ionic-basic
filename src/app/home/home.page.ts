import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public nav:NavController
  ) {}

  tiger_alert(){
    alert("This is a tiger!")
  }

  next_page(){
    this.nav.navigateForward('second');
  }

}
