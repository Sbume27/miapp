import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { PaginaUnoComponent } from './pages/pagina-uno/pagina-uno.component';
import { ResultadoDosComponent } from './pages/resultado-dos/resultado-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    PaginaUnoComponent,
    ResultadoDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
