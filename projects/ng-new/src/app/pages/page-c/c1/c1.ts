import { Component, inject } from '@angular/core';
import { MAGIC_NUMBER } from '../../../tokens/magic-number.token';

@Component({
  selector: 'app-c1',
  imports: [],
  templateUrl: './c1.html',
  styleUrl: './c1.scss'
})
export class C1 {
  readonly magicNumber = inject(MAGIC_NUMBER);

}
