import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-json1',
  templateUrl: './json1.component.html',
  styleUrls: ['./json1.component.css']
})
export class Json1Component implements OnInit {

  constructor(private httpObj:HttpClient) { }

  ngOnInit() {//it execute on page load
    this.getitem1();
    this.getitem2();
  }

   item1:any[];
   total1:number;
  
   getitem1()
   {
     this.httpObj.get("./assets/item.json").subscribe(response =>
      {
       this.item1 = response as string[];//this line convert json to array by using response 
       this.total1 = this.item1.length;

     });
   }

   item2:any[];
   total2:string;
   getitem2()
   {
     this.httpObj.get("./assets/item2.json").subscribe(response =>
      {
       this.item2 = response as string[];
       this.total2 ="total:"+ this.item2.length;

     });
   }


}
