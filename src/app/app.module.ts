import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { CountryComponent } from './country/country.component';
import { AllcountryComponent } from './allcountry/allcountry.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    CountryComponent,
    AllcountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
