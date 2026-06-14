import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPlansComponent } from './security-plans.component';

describe('SecurityPlansComponent', () => {
  let component: SecurityPlansComponent;
  let fixture: ComponentFixture<SecurityPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
