import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientNotesComponent } from './Components/client-notes/client-notes.component';
import { GeneralComponent } from './Components/client-notes/general/general.component';
import { NotesComponent } from './Components/client-notes/general/notes/notes.component';
import { TestComponent } from './Plugins/test/test.component';

const routes: Routes = [
  {
    path: 'Clients',
    component: ClientNotesComponent,
    children: [
      {
        path: 'General',
        component: GeneralComponent,
        children: [{
          path: 'Client Notes',
          component: NotesComponent
        },{
          path: '**',
          component: TestComponent
        }]
      },{
        path: '**',
        component: TestComponent
      }]
  }, {
    path: '**',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
