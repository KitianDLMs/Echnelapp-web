import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespaldoInformacionComponent } from './respaldo-informacion.component';

describe('RespaldoInformacionComponent', () => {
  let component: RespaldoInformacionComponent;
  let fixture: ComponentFixture<RespaldoInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespaldoInformacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespaldoInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
