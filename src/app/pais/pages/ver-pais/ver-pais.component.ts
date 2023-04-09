import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { first, firstValueFrom, switchMap, tap } from 'rxjs';
import { PaisResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  pais!:PaisResponse;

  constructor(private activeRoute:ActivatedRoute,
    private paisService:PaisService){}
    
  ngOnInit(): void {
    this.activeRoute.params
      .subscribe(({id})=>{
        console.log(id);
        this.paisService.buscarCodigo(id)
        .subscribe(pais=>{this.pais=pais; console.log(pais)} )
      })
  }


  


}
