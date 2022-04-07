import { Component } from '@angular/core';
import { ApiService } from '@stk/api/src/public-api';

@Component({
  selector: 'ab-root',
  template: `
    <h1>Hola Mundo</h1>
    <ab-ui-ui></ab-ui-ui>
    <pre> {{ data$ | async | json }} </pre>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'www';
  data$ = this.apiService.getData$();
  constructor(private apiService: ApiService) {}
}
