import { Routes } from '@angular/router';
import { DishesListComponent } from './pages/dishes/dishes-list/dishes-list.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'dishes', component: DishesListComponent },
    { path: '*', redirectTo: '/home' }

];
