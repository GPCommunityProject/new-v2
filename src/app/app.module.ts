import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientNotesComponent } from './Components/client-notes/client-notes.component';
import { GeneralComponent } from './Components/client-notes/general/general.component';
import { NotesComponent } from './Components/client-notes/general/notes/notes.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { TestComponent } from './Plugins/test/test.component';
import { FooterComponent } from './Plugins/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddClientNotesFormComponent } from './Plugins/add-client-notes-form/add-client-notes-form.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientNotesComponent,
    GeneralComponent,
    NotesComponent,
    TestComponent,
    FooterComponent,
    AddClientNotesFormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
