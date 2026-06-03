import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamarasSeguridadComponent } from './camaras-seguridad.component';

describe('CamarasSeguridadComponent', () => {
  let component: CamarasSeguridadComponent;
  let fixture: ComponentFixture<CamarasSeguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamarasSeguridadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamarasSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
