import { TestBed } from '@angular/core/testing';

import { EntidadFederativaService } from './entidad-federativa.service';

describe('EntidadFederativaService', () => {
  let service: EntidadFederativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntidadFederativaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
