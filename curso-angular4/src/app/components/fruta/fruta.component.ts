import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, Manzana, Pera'; //sin tipo de dato

  //tipos de datos básicos
  public edad: number; // el valor por defecto se da en el constructor
  public nombre : string = "Diego Meneses" //indicar el tipo de dato
  public mayorDeEdad: boolean = true
  public trabajos:Array<any> = ['Programador','Gamer',55];

  comodin:any = 'Cualquiercosa'; //no se necesita declarar la visibilidad

  // lo primero que se ejecuta es el constructor, inicializar variables o configurar cosas
  constructor() {
    this.edad=26;

    // Variables y alcance
    var uno = 8;
    var dos = 15;

    if(uno === 8){
      let uno = 3; //a nivel de bloque
      var dos = 88; // a nivel del código
      console.log('dentro del if uno '+ uno);
      console.log('dentro del if dos '+ dos);
    }

    console.log('fuera del if uno '+ uno); // se conserva el valor global y del bloque
    console.log('fuera del if dos '+ dos); // la variable dos es la misma para todas partes del codigo por eso se sobreescribe

  }

  //Se ejecuta despues del constructor, se usa para ejecutar funciones, servicios y funcionalidades
  ngOnInit() {
    this.cambiarEdad(50); //ejecutar una función de la clase
    console.log(`La edad es: ${this.edad}`);
  }

  cambiarEdad(edad) {
    this.edad= edad; //cambia las propiedades de la clase
  }




}
