import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../app/components/card/card.component';
import { DiscountComponent } from '../app/components/discount/discount.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { TechComponent } from '../app/components/tech/tech.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhpComponent } from "./components/php/php.component";
import { PhytonComponent } from "./components/phyton/phyton.component";
import { UxComponent } from './components/ux/ux.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CardComponent,
    DiscountComponent,
    TechComponent,
    FooterComponent,
    PhpComponent,
    PhytonComponent,
    UxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'masuno-cyberdays';
}
