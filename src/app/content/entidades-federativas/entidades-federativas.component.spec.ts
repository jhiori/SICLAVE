import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadesFederativasComponent } from './entidades-federativas.component';

describe('EntidadesFederativasComponent', () => {
  let component: EntidadesFederativasComponent;
  let fixture: ComponentFixture<EntidadesFederativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntidadesFederativasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntidadesFederativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
