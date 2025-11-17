//For viewing the datas

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../services/employee';


@Component({
  selector: 'app-employee-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.view.component.html',
  styleUrls: ['./employee.view.component.css']
})


export class EmployeeViewComponent {
  @Input() employee: Employee | null = null;

  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
