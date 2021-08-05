import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Planning } from './planning/planning.component';
import { ListComponent } from './list/list.component';
import { NewPlanComponent } from './newPlan/newPlan.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { TabsComp } from './tabs/tabs.component';
import { SelectComp } from './fields/field.component';
import { SearchComp } from './search/search.component';
import { RadioComp } from './radio/radio.components';
import { CheckboxComp } from './checkbox/checkbox.component';
import { DatePicker } from './datepicker/datepicker.component';


@NgModule({
  declarations: [
    AppComponent,
    Planning,
    ListComponent,
    NewPlanComponent,
    TabsComp,
    SelectComp,
    SearchComp,
    RadioComp,
    CheckboxComp,
    DatePicker,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
