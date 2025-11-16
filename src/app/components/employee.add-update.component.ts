import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../services/employee';

@Component({
  selector: 'app-add-update-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.add-update.component.html',
})
export class AddUpdateEmployeeComponent {
  @Input() employee: Employee | null = null;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() employeeSaved = new EventEmitter<void>();

  formEmployee: Employee = this.resetEmployee();

  constructor(private employeeService: EmployeeService) {}

  ngOnChanges() {
    if (this.employee) {
      this.formEmployee = { ...this.employee };
    } else {
      this.formEmployee = this.resetEmployee();
    }
  }

  resetEmployee(): Employee {
    return {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      contactNo: '',
      position: '',
      department: '',
      address: '',
      addedBy: 'Admin'
    };
  }

  saveEmployee() {
    if (this.formEmployee.id) {
      this.employeeService.updateEmployee(this.formEmployee.id, this.formEmployee).subscribe({
        next: () => this.employeeSaved.emit(),
        error: (err) => console.error(err)
      });
    } else {
      this.employeeService.addEmployee(this.formEmployee).subscribe({
        next: () => this.employeeSaved.emit(),
        error: (err) => console.error(err)
      });
    }
  }

  close(saved: boolean) {
    this.closeModal.emit(saved);
  }
}
