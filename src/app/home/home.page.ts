import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public nav:NavController,
    public mc:ModalController
  ) {}

  tiger_alert(){
    alert("This is a tiger!")
  }

  next_page(){
    this.nav.navigateForward('second');
    //if dont want animation this.nav.navigateRoute('second);
  }

  //use sync to ensure component done then execute return
  async open_modal(){
    const modal = await this.mc.create({
      component:ModalPage
    });

    return await modal.present();
  }

}
