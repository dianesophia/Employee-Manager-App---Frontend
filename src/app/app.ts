import { Component, signal } from '@angular/core';
import { EmployeeComponent } from './components/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeComponent],
  template: `
    <app-employee></app-employee>
  `,
  styles: []
})
export class App {
  protected readonly title = signal('EmployeeManagerUI0');
}
