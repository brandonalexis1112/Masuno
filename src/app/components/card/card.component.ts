import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { PromoComponent } from "../promo/promo.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [PromoComponent, FormComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
