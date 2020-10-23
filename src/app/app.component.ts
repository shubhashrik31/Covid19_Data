import { Component } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gloabalData: any = [];
  countryData: any = [];
  USData:any = [];
  constructor(public http:HttpClient)
  {
    this.http.get("https://api.covid19api.com/summary")
    .subscribe((value:any)=>{
      this.gloabalData =value.Global;
      this.countryData = value.Countries;
    
      this.countryData.forEach(element =>
        {

         if(element.CountryCode == "US")
         {
           this.USData=element;
         }

       });
     console.log(this.countryData);

    });
  }

  title = 'covidApp';
}
