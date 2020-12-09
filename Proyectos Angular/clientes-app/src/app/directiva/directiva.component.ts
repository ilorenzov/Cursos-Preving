import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
  listaCurso: string[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#'];
  habilitar: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  setHabilitar(): void {
    // tslint:disable-next-line:triple-equals
    this.habilitar = (this.habilitar == true) ? false : true;

  }
}
