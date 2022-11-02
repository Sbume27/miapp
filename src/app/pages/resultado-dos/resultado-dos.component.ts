import {ThisReceiver} from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado-dos',
  templateUrl: './resultado-dos.component.html',
  styleUrls: ['./resultado-dos.component.css']
})
export class ResultadoDosComponent implements OnInit {
  resultado?: string| null;
   constructor() {
    this.resultado="";
   }
 
  ngOnInit(): void {
    this.resultado=localStorage.getItem("resultado"); 
      }
         }     