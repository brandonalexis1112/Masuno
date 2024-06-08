import { Component } from '@angular/core';
import { DiscountStepsComponent } from './discount-steps/discount-steps.component';

@Component({
  selector: 'app-discount',
  standalone: true,
  imports: [DiscountStepsComponent],
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent {}
