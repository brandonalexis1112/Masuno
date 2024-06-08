import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DiscountStep1Component } from '../discount-step-1/discount-step-1.component';
import { DiscountStep2Component } from '../discount-step-2/discount-step-2.component';
import { DiscountStep3Component } from '../discount-step-3/discount-step-3.component';

@Component({
  selector: 'app-discount-steps',
  standalone: true,
  imports: [CommonModule, DiscountStep1Component, DiscountStep2Component, DiscountStep3Component],
  templateUrl: './discount-steps.component.html',
  styleUrls: ['./discount-steps.component.css']
})
export class DiscountStepsComponent {}
