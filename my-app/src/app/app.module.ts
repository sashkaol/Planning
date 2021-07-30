import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Planning } from './planning/planning.component';
import { ListComponent } from './list/list.component';
import { FiltersComponent } from './filters/filters.component';
import { NewPlanComponent } from './newPlan/newPlan.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    Planning,
    ListComponent,
    FiltersComponent,
    NewPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
