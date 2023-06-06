import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string;
  email: string;
  apellido: string;

  constructor(){
    this.nombre = '';
    this.apellido = '';
    this.email = '';

  }
}

