import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-selector',
  imports: [],
  templateUrl: './selector.html',
  styleUrl: './selector.scss'
})
export class Selector {
  readonly options = input.required<string[]>();
  readonly selectedOption = model('');

  userChanges(value: string) {
    this.selectedOption.set(value);
  }

}
