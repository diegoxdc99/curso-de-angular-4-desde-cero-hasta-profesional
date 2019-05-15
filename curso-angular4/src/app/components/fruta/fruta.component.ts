import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, Manzana, Pera';

  constructor() { }

  ngOnInit() {
  }

}
