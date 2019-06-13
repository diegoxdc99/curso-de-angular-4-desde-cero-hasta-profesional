import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  public nombre_prenda = 'Pantalones vaqueros';
  public coleccion_ropa = ['Pantalones blancos', 'Camiseta roja'];

  constructor() { }

  prueba() {
    return this.nombre_prenda;
  }

  pruebaParametro(nombre_prenda) {
    return nombre_prenda;
  }

  addRopa(nombre_prenda: string) : Array<string>{
    this.coleccion_ropa.push(nombre_prenda);
    return this.getRopa();
  }

  getRopa() : Array<string>{
    return this.coleccion_ropa;
  }

  deleteRopa(indice:number) : Array<string> {
    this.coleccion_ropa.splice(indice, 1);
    return this.getRopa();
  }
}
