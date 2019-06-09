import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {
  public titulo = "Componente Empleados";
  public empleado: Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo: boolean;
  public color: string;
  public color_seleccionado: string;

  constructor() {
    this.empleado = new Empleado('Diego Meneses', 20, 'Programador', true);
    this.trabajadores = [
      new Empleado('Pedro Angel', 30, 'Admin', false),
      new Empleado('Diego Meneses', 20, 'Programador', true),
      new Empleado('Pablito Clavito', 40, 'Clavador', true)
    ];

    this.trabajador_externo = false;
    this.color = 'green';
    this.color_seleccionado = '#ccc'
  }

  ngOnInit() {
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarExterno(valor) {
    this.trabajador_externo = valor;
  }

  logColorSeleccionado() {
    console.log(`El color seleccionado es: ${this.color_seleccionado}`)
  }

}
