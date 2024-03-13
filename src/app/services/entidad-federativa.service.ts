import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map, of }  from 'rxjs';
import { EntidadFederativa, Municipio, Localidad, EntidadFederativa_F } from '../models/entidadFederativaFull.model';
// import { EntidadFederativa } from '../models/entidadFederativaFull.model';

@Injectable({
  providedIn: 'root'
})
export class EntidadFederativaService {

  constructor(private http: HttpClient){
    // this.getJSON().subscribe(data => {
    //     console.log('Podemos leer JSON con servicio: ',data);
    // });
    //this.getEntidadesFederativas()
  }

  urlLocalData: string = './assets/data/entidadesFederativas.json'

  // private EntidadFederativa[]: EntidadFederativa = new Array<EntidadFederativa>();

  public getJSON(): Observable<any>{
      return this.http.get('/assets/data/entidadesFederativas.json')
  }

  // public getEntidadesFederativas(): Observable<EntidadFederativa[]>{
  //   //const copy: 
  //   // console.log('Entra a leer JSON File') 
  //   return this.http.get<EntidadFederativa_F<EntidadFederativa>>('/assets/data/entidadesFederativas.json').pipe(map((response) => response.entidadFederativa_)) //, {observe: 'response'})     
  // }

  public getEntidadesFederativas(): Observable<EntidadFederativa[]>{
    //const copy: 
    // console.log('Entra a leer JSON File') 
    
    return this.http.get<EntidadFederativa_F<EntidadFederativa>>(`${this.urlLocalData}`).pipe(map((response) => {
      // console.log(response.entidadFederativa)
      return response.entidadFederativa
    })) //, {observe: 'response'})       
  }

  public getMunicipios(): Observable<Municipio[]>{    
    return this.http.get<EntidadFederativa_F<Municipio>>(`${this.urlLocalData}`).pipe(map((response) => response.municipio))       
  }

  public getLocalidades(): Observable<Localidad[]>{    
    return this.http.get<EntidadFederativa_F<Localidad>>(`${this.urlLocalData}`).pipe(map((response) => response.localidad))            
  }  
}
