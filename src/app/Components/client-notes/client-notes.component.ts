import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-notes',
  templateUrl: './client-notes.component.html',
  styleUrls: ['./client-notes.component.scss']
})
export class ClientNotesComponent implements OnInit {
  links = ['Accruals', 'Benefits', 'Billing', 'Client Change Log', 'Delivery', 'Documents', 'Employee Change Log', 'General', 'HUman Resources', 'Integeations', 'Job Titles', 'Labor-GL', 'Organization', 'Pay Codes', 'Pay Groups', 'Retirement', 'Services', 'Settings', 'Taxes', 'Third Parties', 'Workers Comp'];
  activeLink = '';

  constructor() { }

  ngOnInit(): void {
  }

}
