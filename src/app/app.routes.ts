import { Routes } from '@angular/router';
import { PhpComponent } from "./components/php/php.component";
import { PhytonComponent } from "./components/phyton/phyton.component";
import { UxComponent } from "./components/ux/ux.component";

export const routes: Routes = [
    { path: 'php', component: PhpComponent },
    { path: 'python', component: PhytonComponent },
    { path: 'ux', component: UxComponent },
];
