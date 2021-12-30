import { Component, OnInit } from '@angular/core';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddClientNotesFormComponent } from 'app/Plugins/add-client-notes-form/add-client-notes-form.component';

export interface PeriodicElement {
  'Note Category': string;
  'Note Type': string;
  'Note Priority': string;
  'Notes': string;
  'Effective Date': string;
  'Expiration Date': string;
}


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;

  ELEMENT_DATA: PeriodicElement[] = [
    {
      'Note Category': 'General Service Bureau',
      'Note Type': 'Previous Processor',
      'Note Priority': 'Low',
      'Notes': 'BI-WEEKLY: Patricia.Suvak',
      'Effective Date': '09/07/2012',
      'Expiration Date': '09/07/2013'
    },
    {
      'Note Category': 'General Super User',
      'Note Type': 'Nect Processor',
      'Note Priority': 'Hight',
      'Notes': 'BI-WEEKLY: Patricia.Suvak',
      'Effective Date': '10/07/2012',
      'Expiration Date': '12/07/2013'
    },
    {
      'Note Category': 'General Service Bureau',
      'Note Type': 'Previous Processor',
      'Note Priority': 'Low',
      'Notes': 'BI-WEEKLY: Patricia.Suvak',
      'Effective Date': '09/07/2012',
      'Expiration Date': '09/07/2013'
    },
    {
      'Note Category': 'General Super User',
      'Note Type': 'Nect Processor',
      'Note Priority': 'Hight',
      'Notes': 'BI-WEEKLY: Patricia.Suvak',
      'Effective Date': '10/07/2012',
      'Expiration Date': '12/07/2013'
    },
    {
      'Note Category': 'General Service Bureau',
      'Note Type': 'Previous Processor',
      'Note Priority': 'Low',
      'Notes': 'BI-WEEKLY: Patricia.Suvak',
      'Effective Date': '09/07/2012',
      'Expiration Date': '09/07/2013'
    },
    {
      'Note Category': 'General Super User',
      'Note Type': 'Nect Processor',
      'Note Priority': 'Hight',
      'Notes': 'BI-WEEKLY: Patricia.Suvak',
      'Effective Date': '10/07/2012',
      'Expiration Date': '12/07/2013'
    },
  ];

  filters = [{'value': 'all', 'viewValue': 'all'}, {'value': 'test1', 'viewValue': 'test1'}];

  displayedColumns: string[] = ['Note Category', 'Note Type', 'Note Priority', 'Notes', 'Effective Date', 'Expiration Date', 'Actions'];
  dataSource = this.ELEMENT_DATA;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddClientNotesFormComponent, {
      width: '600px',
      backdropClass: 'dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
