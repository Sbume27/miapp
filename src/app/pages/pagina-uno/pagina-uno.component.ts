import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina-uno',
  templateUrl: './pagina-uno.component.html',
  styleUrls: ['./pagina-uno.component.css']
})
export class PaginaUnoComponent implements OnInit {
  constructor(private route:Router) {
  }
  Cod_equipo!: number;
  nom_equipo!: string;
  fecha_registro!: string;
  Id_marca!: number;
  nom_marca!:string;
  cedula_usuario!:string;
  nom_usuario!:string;
  Dependencia!:string;
   ngOnInit(): void {
  }
 }