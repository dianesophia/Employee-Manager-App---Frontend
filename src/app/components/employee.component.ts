//The primary page 

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../services/employee';
import { AddUpdateEmployeeComponent } from './employee.add-update.component';
import { EmployeeViewComponent } from './employee.view.component';
import { DeleteConfirmComponent } from './employee.delete.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, AddUpdateEmployeeComponent, EmployeeViewComponent, DeleteConfirmComponent],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchText: string = '';
  modalOpen = false;
  viewModalOpen = false;
  deleteModalOpen = false;
  selectedEmployee: Employee | null = null;

  constructor(private employeeService: EmployeeService) { }

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



//Modal (Dekete data)
  openDeleteModal(emp: Employee) {
    this.selectedEmployee = emp;
    this.deleteModalOpen = true;
  }

  confirmDelete() {
    if (this.selectedEmployee) {
      this.employeeService.deleteEmployee(this.selectedEmployee.id).subscribe({
        next: () => {
          this.loadEmployees();
          this.deleteModalOpen = false;
          this.selectedEmployee = null;
        },
        error: (err) => console.error(err)
      });
    }
  }

  cancelDelete() {
    this.deleteModalOpen = false;
    this.selectedEmployee = null;
  }

  //Modal (add and update)
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



  // Modal (view data)
  viewEmployee(emp: Employee) {
    this.selectedEmployee = emp;
    this.viewModalOpen = true;
  }


  closeViewModal() {
    this.viewModalOpen = false;
    this.selectedEmployee = null;
  }



  getUniqueDepartments(): string[] {
    return Array.from(new Set(this.employees.map(emp => emp.department)));
  }

  getUniquePositions(): string[] {
    return Array.from(new Set(this.employees.map(emp => emp.position)));
  }
}
