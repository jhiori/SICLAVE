export class Localidad{
    constructor(
        public cveLocalidad?: string,
        public nameLocalidad?: string,
        public cveMunicipio?: string
    ){
        this.cveLocalidad = this.cveLocalidad || ''
        this.nameLocalidad = this.nameLocalidad || ''
        this.cveMunicipio = this.cveMunicipio || ''
    }
}