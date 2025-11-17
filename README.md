# EmployeeManagerUI

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.10.

## Features

- View all employees in a list  
- Add a new employee  
- Update employee details  
- Delete employees (soft delete)  
- Search and filter employees  
- Responsive design for desktop and mobile  

---

## Technology Stack

- **Frontend Framework:** Angular 20.3.10  
- **Language:** TypeScript, HTML, CSS  
- **Package Manager:** npm  
- **Build Tool:** Angular CLI  
- **Testing:** Karma (unit tests), optional e2e frameworks like Cypress or Protractor 


---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)  
- [Angular CLI](https://angular.io/cli)  
- [npm](https://www.npmjs.com/) (comes with Node.js)  
- Backend API running (Employee Manager Backend)  

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/dianesophia/EmployeeManagerUI.git
cd EmployeeManagerUI
```


2. **Install dependencies**
```bash
npm install
```


3. **Configure Backend API**
   ---
If your backend is running on a different port or URL, update the API endpoints in the Angular services (src/app/services/employee.service.ts) to match your backend URL. For example:
```bash
  private apiUrl = 'https://localhost:7175/api/Employee'; 
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
