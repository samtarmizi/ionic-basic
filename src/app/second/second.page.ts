import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  //variable declaration
  user_input:any;
  my_name:any;

  constructor() { }

  ngOnInit() {
  }

  changeText(){
    this.my_name = this.user_input;
  }

}
