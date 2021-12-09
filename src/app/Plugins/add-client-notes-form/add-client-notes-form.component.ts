import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-client-notes-form',
  templateUrl: './add-client-notes-form.component.html',
  styleUrls: ['./add-client-notes-form.component.scss']
})
export class AddClientNotesFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddClientNotesFormComponent>,
  ) {

  }

  ngOnInit(): void {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
