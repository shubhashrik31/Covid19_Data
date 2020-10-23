import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnChanges {

  @Input() gloabalData: any;


  constructor()
   {
     console.log(this.gloabalData);

   }

  ngOnChanges(){
    if(Object.keys(this.gloabalData).length != 0)
    {console.log(this.gloabalData);}
  }

}
