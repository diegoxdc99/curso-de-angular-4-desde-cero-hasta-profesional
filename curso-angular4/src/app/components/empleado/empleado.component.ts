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

  constructor() {
    this.empleado = new Empleado('Diego Meneses', 20, 'Programador', true);
    this.trabajadores = [
      new Empleado('Diego Meneses', 20, 'Programador', true),
      new Empleado('Pedro Angel', 30, 'Admin', true),
      new Empleado('Pablito Clavito', 40, 'Clavador', true)
    ]
  }

  ngOnInit() {

    console.log(this.empleado);
    console.log(this.trabajadores);
  }

}
