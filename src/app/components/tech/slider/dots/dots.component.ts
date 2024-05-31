import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dots.component.html',
  styleUrl: './dots.component.css'
})
export class DotsComponent {
  @Input() count!: number;
  @Input() currentIndex!: number;
  @Output() dotClick = new EventEmitter<number>();

  onDotClick(index: number): void {
    this.dotClick.emit(index);
  }
}
