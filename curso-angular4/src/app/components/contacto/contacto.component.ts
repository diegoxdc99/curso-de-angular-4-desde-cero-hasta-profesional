import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public titulo = "Página de contacto";
  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
    });
  }


  redirigir() {
    this._router.navigate(['/contacto','diegoconparametro'])
  }

  redirigirDos() {
    this._router.navigate(['/pagina-principal'])
  }
}
