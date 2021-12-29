import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { ClientNotesComponent } from './Components/client-notes/client-notes.component';
import { GeneralComponent } from './Components/client-notes/general/general.component';
import { NotesComponent } from './Components/client-notes/general/notes/notes.component';
import { TestComponent } from './Plugins/test/test.component';
import { ProfileComponent } from './profile/profile.component';

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
  imports: [RouterModule.forRoot([
    {
        matcher: (url) => {
        if (url.length === 3 && url[0].path.match(/^@[\w]+$/gm)) {
          return {
            consumed: url,
            posParams: {
              username: new UrlSegment(url[0].path.substr(1), {})
            }
          };
        }
    
        return null;
      },
      component: ProfileComponent
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
