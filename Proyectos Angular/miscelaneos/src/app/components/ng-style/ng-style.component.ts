import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="avi">
     Hola mundo, esta es una etiqueta
    </p>
    <button (click)="avi= avi+5" class="btn btn-primary">
      <i class="fa fa-plus"></i>
    </button>
    <button (click)="avi= avi-5" class="btn btn-primary">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  avi: number = 30;
  constructor() { }

  ngOnInit(): void {
  }

}
