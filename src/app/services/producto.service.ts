import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:4500/api/productos/';

  constructor(private http: HttpClient, private toastr: ToastrService) { }


  // metodos
  getProductos(): Observable<any>{
    return this.http.get(this.url);
  }

  deleteDatos(id: string): Observable<any>{
    this.toastr.error("Se eliminado exitosamente", "Producto Eliminado");
    return this.http.delete(this.url + id);

  }


}
