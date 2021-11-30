import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'v2';
  links = ['Dashboard', 'clients', 'Employees', 'Reports', 'Payroll', 'Tools'];
  activeLink = 'clients';
}
