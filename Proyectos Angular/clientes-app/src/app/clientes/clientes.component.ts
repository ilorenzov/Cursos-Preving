import {Component, OnInit} from '@angular/core';

import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes //function(clientes){this.clientes=clientes}
    );
  }

  delete(cliente: Cliente): void {
    Swal.fire({
      title: `Está seguro que desea eliminar al cliente ${cliente.nombre}?`,
      text: 'No podrá revertir los cambios!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , eliminalo!!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli != cliente);
            Swal.fire(
              'Borrado!',
              'El registro del cliente ha sido eliminado',
              'success'
            );
          }
        );

      }
    });
  }
}
