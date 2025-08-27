import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MyService } from './services/my-service';
import { startTimeouts } from './services/utils';
import { Counter } from "./components/counter/counter";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyLinkDirective } from './directives/my-link.directive';
import { MY_LINK_ACTIVE_CLASS } from './tokens/my-link-active-class.token';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Counter, MyLinkDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss', 
  providers: [{
    provide: MY_LINK_ACTIVE_CLASS, 
    useValue: 'selected'
  }]
})
export class App {
  readonly myService = inject(MyService);
  readonly http = inject(HttpClient);

  readonly showCounter = signal(true);
  protected readonly title = signal('ng-new');

  toggleCounter() {
    this.showCounter.update(v => !v);
  }
}
