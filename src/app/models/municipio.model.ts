export class Municipio{
    constructor(
        public cveMunicipio?: string,
        public nameMunicipio?: string,
        public cveEstado?: string
    ){
        this.cveMunicipio = this.cveMunicipio || '';
        this.cveEstado = this.cveEstado || '';
        this.nameMunicipio = this.nameMunicipio || '';
    }
}