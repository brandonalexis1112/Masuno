import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountStep1Component } from './discount-step-1.component';

describe('DiscountStep1Component', () => {
  let component: DiscountStep1Component;
  let fixture: ComponentFixture<DiscountStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscountStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
