import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChecklistItem } from '../../../models/checklist-item.model';
import { ChecklistItemComponent } from '../checklist-item/checklist-item.component';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule,ChecklistItemComponent],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css',
})
export class ChecklistComponent {
  checklist: ChecklistItem[] = [
    {
      id: 1,
      description: 'Acepto los Términos y políticas de privacidad',
      checked: false,
    },
    { id: 2, description: 'Acepto el Uso de datos personales', checked: false },
  ];
  toggleChecked(id: number) {
    const item = this.checklist.find((item) => item.id === id);
    if (item) {
      item.checked = !item.checked;
    }
  }
}
