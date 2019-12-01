import { Component, OnInit } from '@angular/core';
import { RequestIdle } from 'ngx-request-idle';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  name = 'Ngx-RequestIdle';

  constructor(private _requestIdle: RequestIdle) { }

  ngOnInit() {
    this._requestIdle.callback(() => console.log('requestIdleCallback'));
    this._requestIdle.requestAnimationFrame(() => console.log('requestAnimationFrame'));
  }
}
