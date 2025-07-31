import { Routes } from '@angular/router';
import { PlainhtmlComponent } from './plainhtml/plainhtml.component';
import { MaterialtableComponent } from './materialtable/materialtable.component';

export const routes: Routes = [
    {path:'html-table', component: PlainhtmlComponent},
    {path:'material-table',component: MaterialtableComponent}
    
];
