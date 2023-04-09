import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  capitales:PaisResponse[]=[]
  termino:string= "";
  hayError:boolean = false

  constructor(private paisService:PaisService) {  
  }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino).subscribe(
      resp=> this.capitales = resp,
      err=> this.hayError = true
    );
    
  
  
  }
  sugerencias(termino:string){

  }

}
