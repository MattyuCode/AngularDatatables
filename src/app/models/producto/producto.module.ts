

export class Producto {

  //  _id?: number;
  nombre: string;
  posicion: string;
  oficio: string;
  numero: number;
  fecha_inicio: Date;
  salario: number;


  constructor(_nombre: string, _posicion: string, _oficio: string, _numero: number, _fecha_inicio: Date, _salario: number) {
    this.nombre = _nombre;
    this.posicion = _posicion;
    this.oficio = _oficio;
    this.numero = _numero;
    this.fecha_inicio = _fecha_inicio;
    this.salario = _salario;
  }


}
