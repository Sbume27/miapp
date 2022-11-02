import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { PaginaUnoComponent } from './pages/pagina-uno/pagina-uno.component';
import { ResultadoDosComponent } from './pages/resultado-dos/resultado-dos.component';
const routes: Routes = [
  { path: 'bienvenida-component', component: BienvenidaComponent },
  { path: 'pagina-uno-component', component: PaginaUnoComponent },
  { path: 'resultado-dos-component', component: ResultadoDosComponent},
  { path: '', redirectTo: 'bienvenida-component', pathMatch:'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
