import { Component, computed, effect, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Selector } from "../../components/selector/selector";

@Component({
  selector: 'app-page-a',
  imports: [Selector],
  templateUrl: './page-a.html',
  styleUrl: './page-a.scss'
})
export class PageA {
  readonly colors = signal(['red', 'green', 'blue', 'magenta', 'orange']);
  readonly selectedColor = signal('green');


  readonly firstNumber = signal(5);
  readonly secondNumber = signal(10);

  readonly secondNumber$ = toObservable(this.secondNumber);
  readonly secondSecondNumber = toSignal(this.secondNumber$);

  readonly sum =  computed(() => this.firstNumber() + this.secondNumber());

  reset() {
    this.firstNumber.set(0);
    this.secondNumber.set(0);
  }

  incFirst() {
    this.firstNumber.update(v => v + 1);
  }

  constructor() {
    effect(() => {
      console.log(`first = ${this.firstNumber()}, second = ${this.secondNumber()}`)
    });

    setTimeout(() => {
      this.secondNumber.set(50);
    }, 5000);


  }

}
