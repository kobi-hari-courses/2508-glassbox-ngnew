import { Component, inject, input } from '@angular/core';
import { MAGIC_NUMBER } from '../../tokens/magic-number.token';

@Component({
  selector: 'app-page-b',
  imports: [],
  templateUrl: './page-b.html',
  styleUrl: './page-b.scss'
})
export default class PageB {
  readonly id = input.required<string>();
  readonly magicNumber = inject(MAGIC_NUMBER);

}


