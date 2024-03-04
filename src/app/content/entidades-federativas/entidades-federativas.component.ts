import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http"

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';

import { EntidadFederativa } from '../../models/entidadFederativa.model';
import { Municipio } from '../../models/municipio.model';

// import * as EFData from '../../../assets/data/entidadesFederativas.json'
import { Localidad } from '../../models/localidad.model';

@Component({
  selector: 'app-entidades-federativas',
  standalone: true,
  imports: [MatIconModule, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './entidades-federativas.component.html',
  styleUrl: './entidades-federativas.component.sass'
})
export class EntidadesFederativasComponent implements OnInit {
  // entFed = ['Aguascalientes', 'CDMX'];
  // entFedSelected: string = '';
  // municipioSelected: string = '';
  
  rootDataPath: string = '/assets/data/entidadesFederativas.json'
  dataFiles: Array<string> = ['entidadesFederativas','municipios'];
  
  // entFed: EntidadFederativa = <EntidadFederativa>EFData.entidadesFederativas;
  //  new EntidadFederativa();
  entFedSelected: EntidadFederativa = new EntidadFederativa();
  municipioSelected: Municipio = new Municipio();
  localidadSelected: Localidad = new Localidad();

  //  constructor(){
  //   this.entFed = <EntidadFederativa>EFData.entidadesFederativas;
  //  }

  filtrarMunicipio(){
    // this.municipio = this.municipio.filter(x => x.cveEstado == this.entFedSelected)
    // alert()
    this.municipioSelected = {};
    this.resultMunicipio = this.municipio.filter(x => x.cveEstado == this.entFedSelected.cveEstado)
    this.localidadSelected = {};
  
  }

  filtrarLocalidad(){
    this.resultLocalidad = this.localidad.filter(x => x.cveMunicipio == this.municipioSelected.cveMunicipio)
  }

  ngOnInit(){
    console.log('Entra antes de render')
    
    // console.log(this.entFed2)
    // this.httpClient.get("assets/data/entidadFederativas.json").subscribe(data => {
    //   this.entFed2 = data
    //   console.log(this.entFed)
    // })
    // fetch(this.rootDataPath.concat(this.dataFiles[0].toString())).then(res => res.json())
    //   .then(json => {
    //     this.entFed2 = json
    //   })
  }

  resultMunicipio: Municipio[] = new Array<Municipio>();
  resultLocalidad: Localidad[] = new Array<Localidad>();
  // resultMunicipio: Municipio[] = new Array<Municipio>();

  entFed: EntidadFederativa[]= [
    {cveEstado: 'AGU', nameEstado: 'Estado de México'},
    {cveEstado: 'CDMX', nameEstado: 'Ciudad de México'},
  ];

  municipio: Municipio[]= [
    {cveEstado: 'AGU', cveMunicipio: 'TIM', nameMunicipio: 'Timilpan'},
    {cveEstado: 'CDMX', cveMunicipio: 'IZT', nameMunicipio: 'Iztapalapa'},
  ];

  localidad : Localidad[] = [
    {cveLocalidad: '', nameLocalidad: 'B. Iturbide Ixcaja', cveMunicipio: 'TIM'},
    {cveLocalidad: '', nameLocalidad: 'San Lorenzo Tezonco', cveMunicipio: 'IZT'}
  ]

}
