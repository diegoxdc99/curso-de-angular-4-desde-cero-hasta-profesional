import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from 'src/app/services/peticiones/peticiones.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.scss']
})
export class CochesComponent implements OnInit {
  public coche: Coche;
  public coches: Array<Coche>;
  public articulos;

  constructor(
    private _peticionesService : PeticionesService
  ) {
    this.coche = new Coche("","","");
    this.coches = [
      new Coche("Seat Panda","120","Blanco"),
      new Coche("Renault Clio","110","Azul")
    ];
  }

  ngOnInit() {
    this._peticionesService.getArticulos().subscribe(
      result => {
        this.articulos = result;
        console.log(this.articulos)
        if(!this.articulos) {
          console.log("Error en el servidor")
        }

      },
      error => {
        console.log(error)
      }
    )
    console.log(this._peticionesService.getPrueba());
  }

  onSubmit() {
    this.coches.push(this.coche);
    this.coche = new Coche("","","");
  }

}


