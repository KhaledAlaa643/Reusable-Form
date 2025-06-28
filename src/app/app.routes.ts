import { Routes } from '@angular/router';
import { FormComponent } from './shared/form/form.component';
import { DashboardComponent } from './shared/form/dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { RegisterComponent } from './shared/form/register/register.component';

export const routes: Routes = [
    {path:"dashboard",component:DashboardComponent},
    {path:"register",component:RegisterComponent},
    {path:"orders",component:OrdersComponent}
];
