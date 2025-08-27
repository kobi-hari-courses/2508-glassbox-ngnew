import { Component } from '@angular/core';
import { startTimeouts } from '../../services/utils';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  constructor() {
    startTimeouts();
  }
}
