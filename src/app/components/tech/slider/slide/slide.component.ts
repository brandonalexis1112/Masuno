import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css',
})
export class SlideComponent {
  @Input() content!: string;
  @Input() image!: string;
  @Input() route!: string;
  @Input() isActive = false;
}
