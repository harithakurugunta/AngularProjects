import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(private Obj:HttpClient) { }

  ngOnInit() {
    this.fetchdata();
  }
p:number=1; //to start from first page
searchkey:string;
datalist:any[];
totaldata:number;

fetchdata()
{
  var url="http://cybotrix.com/ios/car.json";
  this.Obj.get(url).subscribe(response=>
    {
      this.datalist=response as string[];
      this.totaldata=this.datalist.length;

  });
}
}
