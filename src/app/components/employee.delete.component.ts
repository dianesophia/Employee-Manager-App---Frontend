//For deleting the data

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../services/employee';

@Component({
  selector: 'app-delete-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.delete.component.html',

  styleUrls: ['./employee.delete.component.css']
})
export class DeleteConfirmComponent {
  @Input() employee: Employee | null = null; 

  @Output() confirm = new EventEmitter<void>(); 
  @Output() cancel = new EventEmitter<void>();

 
  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
