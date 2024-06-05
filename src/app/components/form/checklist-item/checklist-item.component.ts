import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChecklistItem } from '../../../models/checklist-item.model';

@Component({
  selector: 'app-checklist-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checklist-item.component.html',
  styleUrl: './checklist-item.component.css',
})
export class ChecklistItemComponent {
  @Input() item!: ChecklistItem;
  @Output() toggleChecked = new EventEmitter<number>();

  onToggle() {
    this.toggleChecked.emit(this.item.id);
  }
}
