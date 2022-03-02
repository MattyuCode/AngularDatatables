import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { HomeComponent } from './components/home/home.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'crear', component: CrearProductoComponent },
  { path: 'lista', component: ListarProductoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
