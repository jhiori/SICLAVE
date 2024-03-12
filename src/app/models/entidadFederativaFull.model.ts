export class EntidadFederativa{
    constructor(
        public cveEstado?: string,
        public nameEstado?: string,
        public cvePais?: string
    ){
        this.cveEstado = this.cveEstado || '';
        this.nameEstado = this.nameEstado || '';
        this.cvePais = this.cvePais || '';
    }
}

export interface EntidadFederativa_F<T>{
    entidadFederativa: T[];
    municipio: T[];
    localidad: T[];
}

export class Municipio{
    constructor(
        public cveMunicipio?: string,        
        public cveEstado?: string,
        public nameMunicipio?: string
    ){
        this.cveMunicipio = this.cveMunicipio || '';
        this.cveEstado = this.cveEstado || '';
        this.nameMunicipio = this.nameMunicipio || '';
    }
}


export class Localidad{
    constructor(
        public cveLocalidad?: string,
        public cveMunicipio?: string, 
        public cveEstado?: string, 
        public nameLocalidad?: string,
          
    ){
        this.cveLocalidad = this.cveLocalidad || ''
        this.cveMunicipio = this.cveMunicipio || '';
        this.cveEstado = this.cveEstado || '';
        this.nameLocalidad = this.nameLocalidad || ''
        
    }
}