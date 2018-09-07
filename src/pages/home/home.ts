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
  constructor(public navCtrl: NavController) {}

  /**
   * + click handler.
   */
  
  addition() {
    this.result = this.result + '+';
  }

  /**
   * - click handler.
   */

  substraction() {
    this.result = this.result + '-';

  }

  /**
   * X click handler.
   */

  multiplication() {
    this.result = this.result + 'x';
  }

  /**
   * / click handler.
   */

  division() {
    this.result = this.result + '/';
  }

  /**
   * = click handler.
   */

  doCalcul() {
    let finalValue = 0;
    let operators = [];
    let visitedString = 0;

    // Create numbers array
    this.numbers = this.result.split(new RegExp(this.separators.join('|'), 'g'));
    finalValue = Number(this.numbers[0])
    for (let i = 0; i < this.numbers.length - 1; i++) {
      // create operators array
      operators[i] = this.result[this.numbers[i].length + visitedString + i];
      visitedString += this.numbers[i].length;
      switch (operators[i]) {
        case '+':
          finalValue += Number(this.numbers[i + 1]);
          break;
        case '-':
          finalValue -= Number(this.numbers[i + 1]);
          break;
        case 'x':
          finalValue *= Number(this.numbers[i + 1]);
          break;
        case '/':
          if (this.numbers[i + 1] === 0) return
          finalValue /= Number(this.numbers[i + 1]);
          break;
        default:
          break;
      }
    }
    this.result = String(finalValue);
  }

  /**
   * On number click handler.
   * @param n {number}
   */

  onNumber(n) {
    if (this.result !== '0') {
      this.result = this.result + String(n);
    } else {
      this.result = String(n);
    }
  }

  /**
   * On 0 click handler.
   */
  on0() {
    if (this.result !== '0') {
      this.result = this.result + '0';
    }
  }

  /**
   * On C click handler.
   */

  onC() {
    this.result = '0';
  }

}
