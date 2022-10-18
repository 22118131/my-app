import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CalculatorComponent } from './dashboard/calculator/calculator.component';
import { InterpolationComponent } from './dashboard/interpolation/interpolation.component';
import { EventBindingComponent } from './dashboard/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './dashboard/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { RectangleComponent } from './dashboard/rectangle/rectangle.component';
import { SquareComponent } from './dashboard/square/square.component';
import { PowerComponent } from './dashboard/power/power.component';
import { EventregistrationComponent } from './dashboard/eventregistration/eventregistration.component';
import { EmployeeregistrationComponent } from './dashboard/employeeregistration/employeeregistration.component';
import { CartComponent } from './dashboard/cart/cart.component';
import { PipesComponent } from './dashboard/pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { PercentagePipe } from './percentage.pipe';
import { CarsComponent } from './dashboard/cars/cars.component';
import { StarComponent } from './dashboard/star/star.component';
import { TaskComponent } from './task/task.component';
import { GpayComponent } from './gpay/gpay.component';
import { BankComponent } from './dashboard/bank/bank.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CalculatorComponent,
    InterpolationComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    RectangleComponent,
    SquareComponent,
    PowerComponent,
    EventregistrationComponent,
    EmployeeregistrationComponent,
    CartComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    PercentagePipe,
    CarsComponent,
    StarComponent,
    TaskComponent,
    GpayComponent,
    BankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
