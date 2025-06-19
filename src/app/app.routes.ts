import { Routes } from '@angular/router';
import { FormComponent } from './shared/form/form.component';
import { DashboardComponent } from './shared/form/dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';

export const routes: Routes = [
    {path:"",component:DashboardComponent},
    {path:"orders",component:OrdersComponent}
];
