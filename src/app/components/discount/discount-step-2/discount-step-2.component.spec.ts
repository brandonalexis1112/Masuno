import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountStep2Component } from './discount-step-2.component';

describe('DiscountStep2Component', () => {
  let component: DiscountStep2Component;
  let fixture: ComponentFixture<DiscountStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscountStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
