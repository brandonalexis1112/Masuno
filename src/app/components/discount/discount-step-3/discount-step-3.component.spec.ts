import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountStep3Component } from './discount-step-3.component';

describe('DiscountStep3Component', () => {
  let component: DiscountStep3Component;
  let fixture: ComponentFixture<DiscountStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountStep3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscountStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
