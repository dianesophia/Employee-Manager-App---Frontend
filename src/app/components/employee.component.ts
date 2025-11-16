import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../services/employee';
import { AddUpdateEmployeeComponent } from './employee.add-update.component';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, AddUpdateEmployeeComponent],
  templateUrl: './employee.component.html',

})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchText: string = '';
  modalOpen = false;
  selectedEmployee: Employee | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.filteredEmployees = data;
      },
      error: (err) => console.error(err)
    });
  }

  filterEmployees() {
    const search = this.searchText.toLowerCase();
    this.filteredEmployees = this.employees.filter(emp =>
      emp.firstName.toLowerCase().includes(search) ||
      emp.lastName.toLowerCase().includes(search) ||
      emp.email.toLowerCase().includes(search) ||
      emp.position.toLowerCase().includes(search) ||
      emp.department.toLowerCase().includes(search)
    );
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => this.loadEmployees(),
        error: (err) => console.error(err)
      });
    }
  }

  openModal(emp?: Employee) {
    this.selectedEmployee = emp ? { ...emp } : null;
    this.modalOpen = true;
  }

  closeModal(saved: boolean) {
    this.modalOpen = false;
    this.selectedEmployee = null;
    if (saved) this.loadEmployees();
  }

  onEmployeeSaved() {
    this.modalOpen = false;
    this.selectedEmployee = null;
    this.loadEmployees();
  }

  viewEmployee(emp: Employee) {
    alert(`
      ID: ${emp.id}
      Name: ${emp.firstName} ${emp.lastName}
      Email: ${emp.email}
      Contact: ${emp.contactNo}
      Position: ${emp.position}
      Department: ${emp.department}
      Address: ${emp.address}
    `);
  }
}
