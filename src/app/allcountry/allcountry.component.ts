import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-allcountry',
  templateUrl: './allcountry.component.html',
  styleUrls: ['./allcountry.component.css']
})
export class AllcountryComponent implements  OnChanges {

 @Input() countryData: any;
  constructor() { }

  ngOnChanges()
  {
    //console.log(this.countryData);
    this.countryData.sort((a:any,b:any)=>{
      return b.TotalConfirmed - a.TotalConfirmed;
      });
  }

}
