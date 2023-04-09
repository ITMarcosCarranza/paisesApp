import { Component, Input } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  
  termino:string=""
   hayError:boolean = false;
  constructor(private paisService:PaisService){}

   @Input('paises')paises :PaisResponse[]=[]



}
