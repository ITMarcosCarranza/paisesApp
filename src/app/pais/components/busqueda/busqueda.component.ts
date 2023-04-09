import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisResponse } from '../../interfaces/pais.interface';
import { IError } from '../../interfaces/error.interface';
import { Subject, debounceTime } from 'rxjs';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  constructor(private paisService: PaisService) { }
  
  ngOnInit(): void {
   this.debounce.pipe(debounceTime(300))
   .subscribe(valor=>{
    this.onDebounce.emit(valor);
   });
  }

  @ViewChild('txtTermino')txtTermino!: ElementRef<HTMLInputElement>;
  @Output('onBuscar') onBuscar:EventEmitter<string> = new EventEmitter();
  
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();
  debounce:Subject<string>= new Subject();

  termino:string="";
  @Input('Comodin') Comodin:string =""

  buscar() {
    this.onBuscar.emit(this.termino);
    this.txtTermino.nativeElement.value = "";
  }

  teclaPresionada(){
    this.debounce.next(this.termino);

  }
}
