import { Component, OnInit } from '@angular/core';
import { RopaService } from 'src/app/services/ropa/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public titulo = "Página principal";
  public listado_ropa: Array<string>;
  public prenda_a_guardar:string;

  public fecha;
  public nombre = "JUAN lopez Martinez";

  constructor(
    private _ropaService: RopaService
  ) {
    this.fecha = new Date();
  }

  ngOnInit() {
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this.listado_ropa);
  }

  guardarPrenda() {
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = "";
  }

  eliminarPrenda(indice:number) {
    this._ropaService.deleteRopa(indice);
  }
}
