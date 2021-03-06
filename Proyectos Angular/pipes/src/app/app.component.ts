import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Ignacio';
  nombre2: string = 'IgNaCiO LoReNzO';
  ejemploarray = [1, 2, 3, 4, 5, 6];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llegaron los datos');
    }, 4500);
  });
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {calle: 'Primera', casa: 20}
  };
}
