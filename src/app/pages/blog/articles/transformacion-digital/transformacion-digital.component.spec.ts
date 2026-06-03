import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformacionDigitalComponent } from './transformacion-digital.component';

describe('TransformacionDigitalComponent', () => {
  let component: TransformacionDigitalComponent;
  let fixture: ComponentFixture<TransformacionDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformacionDigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformacionDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
