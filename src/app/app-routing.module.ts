import { Interpolation } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './dashboard/calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventBindingComponent } from './dashboard/event-binding/event-binding.component';
import { InterpolationComponent } from './dashboard/interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RectangleComponent } from './dashboard/rectangle/rectangle.component';
import { TwoWayBindingComponent } from './dashboard/two-way-binding/two-way-binding.component';
import { SquareComponent } from './dashboard/square/square.component';
import { PowerComponent } from './dashboard/power/power.component';
import { EventregistrationComponent } from './dashboard/eventregistration/eventregistration.component';
import { EmployeeregistrationComponent } from './dashboard/employeeregistration/employeeregistration.component';
import { CartComponent } from './dashboard/cart/cart.component';
import { PipesComponent } from './dashboard/pipes/pipes.component';
import { CarsComponent } from './dashboard/cars/cars.component';
import { StarComponent } from './dashboard/star/star.component';
import { TaskComponent } from './task/task.component';
import { GpayComponent } from './gpay/gpay.component';
import { BankComponent } from './dashboard/bank/bank.component';

const routes: Routes = [ 
  {path:'login',component: LoginComponent},
  {path:'task',component: TaskComponent},
  {path:'dashboard',component: DashboardComponent, children:[
    {path:'calculator',component: CalculatorComponent},
    {path:'event-binding',component: EventBindingComponent},
    {path:'interpolation',component: InterpolationComponent},
    {path:'two-way-binding',component: TwoWayBindingComponent},
    {path:'rectangle',component: RectangleComponent},
    {path:'square',component: SquareComponent},
    {path:'power',component: PowerComponent},
    {path:'eventregistration',component: EventregistrationComponent},
    {path:'employeeregistration',component:EmployeeregistrationComponent},
    {path:'cart',component:CartComponent},
    {path:'pipes',component:PipesComponent},
    {path:'cars',component:CarsComponent},
    {path: 'star',component:StarComponent},
    {path: 'gpay',component:GpayComponent},
    {path: 'bank',component:BankComponent}
  ]},
   {path:'',component: LoginComponent},
   {path:'**',component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
