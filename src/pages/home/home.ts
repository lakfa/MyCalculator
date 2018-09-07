import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result = '0';
  numbers = [];
  separators = ['\\\+', '-', 'x', '/'];
  constructor(public navCtrl: NavController) {

  }
  addition() {
    this.result = this.result+ '+';
  }
  
  substraction() {
    this.result = this.result+ '-';

  }
  
  multiplication() {
    this.result = this.result+ 'x';
  }
  
  division() {
    this.result = this.result+ '/';
  } 

  doCalcul() {
    let finalValue = 0;
    let operators = [];
    let visitedString = 0;

    // Create numbers array
    this.numbers = this.result.split(new RegExp(this.separators.join('|'), 'g'));
    finalValue = Number(this.numbers[0])
    for(let i=0;i<this.numbers.length -1; i++) {
      // create operators array
      operators[i] = this.result[this.numbers[i].length + visitedString + i];
      visitedString += this.numbers[i].length;
      switch (operators[i]) {
        case '+':
        finalValue += Number(this.numbers[i+1]) ;
        break;

        case '-':
        finalValue -= Number(this.numbers[i+1]) ;
        break;
        case 'x':
        finalValue *= Number(this.numbers[i+1]) ;
        break;

        case '/':
        if(this.numbers[i+1] === 0) return
        finalValue /= Number(this.numbers[i+1]) ;
        break;

        default:
          break;
      }
    }
    this.result = String(finalValue);

  }



  on0() {
     if(this.result !== '0') {
      this.result = this.result+ '0';
    }

  }
  on1() { 
    if(this.result === '0') {
      this.result = '1';
    }
    else {
      this.result = this.result+ '1';
    }
  }
  on2() {
    this.result = this.result + '2';
  }
  on3() {
    this.result = this.result + '3';
  }
  on4() {
    this.result = this.result + '4';
   }
  on5() {
    this.result = this.result + '5';
   }
  on6() {
    this.result = this.result + '6';
   }
  on7() { 
    this.result = this.result + '7';
  }
  on8() {
    this.result = this.result + '8';
   }
  on9() {
    this.result = this.result + '9';
   }

  onC() {
    this.result = '0';
  }




}
