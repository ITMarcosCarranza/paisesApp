import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { PaisResponse } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string= 'https://restcountries.com/v3.1';
  constructor(private http:HttpClient) { }


  buscarPais(termino:string):Observable<PaisResponse[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    console.log(url);
     return this.http.get<PaisResponse[]>(url);

  }

  buscarCapital(termino:string):Observable<PaisResponse[]>{
    const url =`${this.apiUrl}/capital/${termino}`;
    return this.http.get<PaisResponse[]>(url);
  }

  buscarCodigo(codigo:string):Observable<PaisResponse>{
    const url =`${this.apiUrl}/alpha/${codigo}`;
    return this.http.get<PaisResponse>(url);
  }
 

}
