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