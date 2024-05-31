import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SliderComponent } from "./slider/slider.component";

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [HeaderComponent,SliderComponent],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent {

}
