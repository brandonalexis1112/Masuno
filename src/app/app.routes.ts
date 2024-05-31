import { Routes } from '@angular/router';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PhpComponent } from "./components/php/php.component";
import { PhytonComponent } from "./components/phyton/phyton.component";
import { UxComponent } from "./components/ux/ux.component";

export const routes: Routes =  [
    {
      path: '',
      component: MainLayoutComponent,
      children: [
        // Routes that use the main layout
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: MainLayoutComponent }
      ]
    },
    {
      path: '',
      component: EmptyLayoutComponent,
      children: [
        // Routes that use the empty layout
        { path: 'php', component: PhpComponent },
        { path: 'python', component: PhytonComponent },
        { path: 'ux', component: UxComponent }
      ]
    },
    { path: '**', redirectTo: 'home' } // Fallback route
  ];
