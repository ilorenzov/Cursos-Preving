import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  mostrar = true;
  frase: any = {mensaje: 'Avi la trampita', autor: 'Avi'};
  personajes: string[] = ['spiderman', 'venom', 'octopus'];
  constructor() { }
  ngOnInit(): void {
  }



}
