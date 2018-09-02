import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result = 0;
  constructor(public navCtrl: NavController) {

  }
  addition() {
    debugger
  }
  
  substraction() {}
  
  multiplication() {}
  
  division() {} 

  on0() {
    this.result = 0;
  }
  on1() { 
    this.result = 1;
  }
  on2() { }
  on3() { }
  on4() { }
  on5() { }
  on6() { }
  on7() { }
  on8() { }
  on9() { }



}
