import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private obj:HttpClient) 
  {

  }

  ngOnInit()
   {
this.carlist();
   }

car:any[];
carlist()
{
  this.obj.get("http://cybotrix.com/ios/car.json").subscribe(
    response=>{
this.car=response as string[];
    });
}
cardetails:any[];
passtoparent(index)
{
  this.cardetails=this.car[index];
}
}
