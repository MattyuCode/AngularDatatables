import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto/producto.module';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.scss']
})
export class ListarProductoComponent implements OnInit {

  public productoFormu: FormGroup;
  mostrarAgregar!: boolean;
  mostrarActualizar!: boolean;


  constructor(private formu: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.productoFormu = this.formu.group({
      nombre: ['', Validators.required],
      posicion: ['', Validators.required],
      oficio: ['', Validators.required],
      numero: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      salario: ['', Validators.required]
    })
  }

  dtOptions: any = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      // lengthMenu: [5, 10, 25],
      lengthMenu: [[5, 10, 20, -1], [5, 10, 20, "Todos"]],
      processing: true,
      language: {
        "decimal": "",
        "emptyTable": "No hay información",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ Entradas",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar:",
        // "zeroRecords": "Sin resultados encontrados",
        "zeroRecords": `<div class="alert alert-danger" role="alert">
        <h5>Sin resultados encontrados</h5>
      </div>`,
        "paginate": {
          "first": "Primero",
          "last": "Ultimo",
          "next": "Siguiente",
          "previous": "Anterior"
        }
      },
    };
  }

  agregarProduc() {
    const TODOSPRODUCT: Producto = {
      nombre: this.productoFormu.get('nombre')?.value,
      posicion: this.productoFormu.get('posicion')?.value,
      oficio: this.productoFormu.get('oficio')?.value,
      numero: this.productoFormu.get('numero')?.value,
      fecha_inicio: this.productoFormu.get('fecha_inicio')?.value,
      salario: this.productoFormu.get('salario')?.value,
    }
    console.log(TODOSPRODUCT);
    this.toastr.success("El producto fue registrado exitosamente", "Producto Registrado");
    // this.router.navigate(['/']);
    let refresh = document.getElementById('cancel')
    refresh?.click();
    this.productoFormu.reset();
  }

  editDatos() {
    // this.productoFormu.controls['nombre'].setValue(row.nombre);
    this.mostrarAgregar = false;
    this.mostrarActualizar = true;
  }

  updateDatos() {
    this.toastr.info("El producto fue actualizado exitosamente", "Producto Actualizado");
    let refresh = document.getElementById('cancel')
    refresh?.click();
    // this.productoFormu.reset();
  }

  deleteDatos() {
    this.toastr.error("Se eliminado exitosamente", "Producto Eliminado");

  }

  clickAddDatos() {
    this.productoFormu.reset();
    this.mostrarAgregar = true;
    this.mostrarActualizar = false;
  }
}
