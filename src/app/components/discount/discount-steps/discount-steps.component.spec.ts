import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountStepsComponent } from './discount-steps.component';

describe('DiscountStepsComponent', () => {
  let component: DiscountStepsComponent;
  let fixture: ComponentFixture<DiscountStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountStepsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscountStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
