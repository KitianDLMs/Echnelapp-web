import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteTiComponent } from './soporte-ti.component';

describe('SoporteTiComponent', () => {
  let component: SoporteTiComponent;
  let fixture: ComponentFixture<SoporteTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoporteTiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoporteTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
