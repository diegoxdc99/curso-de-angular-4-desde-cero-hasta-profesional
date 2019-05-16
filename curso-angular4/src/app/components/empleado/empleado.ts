export class Empleado {
  // forma clasica
  // public nombre:string;
  // public edad:number;

  // constructor(nombre, edad) {
  //   this.nombre = nombre;
  //   this.edad = edad;
  // }

  //hace lo mismo de arriba crea variables y las inicializa
  constructor(
    public nombre:string,
    public edad:number,
    public cargo:string,
    public contratado:boolean
  ){}
}
