import { Component } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EntidadFederativa } from '../../models/entidadFederativa.model';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { Municipio } from '../../models/municipio.model';

@Component({
  selector: 'app-entidades-federativas',
  standalone: true,
  imports: [MatIconModule, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './entidades-federativas.component.html',
  styleUrl: './entidades-federativas.component.sass'
})
export class EntidadesFederativasComponent {
  // entFed = ['Aguascalientes', 'CDMX'];
  // entFedSelected: string = '';
  // municipioSelected: string = '';

  entFedSelected: EntidadFederativa = new EntidadFederativa();
  municipioSelected: Municipio = new Municipio();

  filtrarMunicipio(){
    // this.municipio = this.municipio.filter(x => x.cveEstado == this.entFedSelected)
    // alert()
    this.resultMunicipio = this.municipio.filter(x => x.cveEstado == this.entFedSelected.cveEstado)
    
  }

  resultMunicipio: Municipio[] = new Array<Municipio>();
  // resultMunicipio: Municipio[] = new Array<Municipio>();

  entFed: EntidadFederativa[]= [
    {cveEstado: 'AGU', nameEstado: 'Aguascalientes'},
    {cveEstado: 'CDMX', nameEstado: 'CDMX'},
  ];

  municipio: Municipio[]= [
    {cveEstado: 'AGU', cveMunicipio: '1', nameMunicipio: 'Timilpan'},
    {cveEstado: 'CDMX', cveMunicipio: '2', nameMunicipio: 'Iztapalapa'},
  ];
}
