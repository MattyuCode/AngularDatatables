

export class Producto{

  _id?:number;
  nombre:string;
  categoria:string;
  ubicacion:string;
  precio:number;


    constructor(_nombre:string, _categoria:string, _ubicacion:string, _precio:number){
          this.nombre = _nombre;
          this.categoria = _categoria;
          this.ubicacion = _ubicacion;
          this.precio = _precio;
    }


}
