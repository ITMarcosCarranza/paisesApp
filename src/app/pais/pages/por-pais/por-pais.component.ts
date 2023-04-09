import { Component, ElementRef, ViewChild } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisResponse } from '../../interfaces/pais.interface';
import { IError } from '../../interfaces/error.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino:string ="";
  paises:PaisResponse[]=[];
  hayError:boolean=false;

  constructor(private paisService:PaisService){}

  buscar(termino:string) {
    this.hayError = false;
    this.termino=termino;
    this.paisesSugeridos=[];
    this.paisService.buscarPais(this.termino).subscribe(
      resp => this.paises = resp,
      err =>{ this.hayError=true, this.paises=[]}
    );
 
  }

  paisesSugeridos:PaisResponse[]=[]
  sugerencias(termino:string){
    this.hayError=false;
    this.termino=termino;
    this.paisService.buscarPais(termino)
    .subscribe( (paises:PaisResponse[])=>{
      this.paisesSugeridos= paises.splice(0,4)
    })

  }
 
}
