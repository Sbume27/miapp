import { Component, OnInit } from '@angular/core';
import { Router, RouterConfigOptions } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  enviarPaginaUno():void{
    alert("Ir a realizar el registro de hoja de vida");
  
    this.router.navigate(['pagina-uno-component']);
  }
}
