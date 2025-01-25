import { Routes } from '@angular/router';
import { DemoNotesComponent } from '../components/demo-notes/demo-notes.component';
import { AboutMFEComponent } from '../components/about-mfe/about-mfe.component';

const routes: Routes = [
    { path: 'demo', component: DemoNotesComponent },
    { path: 'about', component: AboutMFEComponent },
  ];

export default routes;
