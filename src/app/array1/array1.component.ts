import { Component, OnInit } from '@angular/core';
import { MyjobService} from './../myjob.service'; // calling service
import {Jobmodel} from '../jobmodel';// calling model
import {Jobmodeltwo} from "../jobmodel2";//model for data exchange

@Component({
  selector: 'app-array1',
  templateUrl: './array1.component.html',
  styleUrls: ['./array1.component.css']
})
export class Array1Component implements OnInit {

  constructor(private Obj:MyjobService) {}
  ngOnInit() {
    this.getrole();
    this.getalljob();
  }
  designation = new Array<Jobmodel>();//variable as array jobmodel is an observable name
  job=new Array<Jobmodeltwo>();
  getrole()
  {
    this.Obj.getdesignation().subscribe(response=>{
      this.designation=response.map(item=>{
        return new Jobmodel(
          item.designation_name
         
         
        )
  });
});
  }

  getalljob()
  {
    this.Obj.getjob().subscribe(response=>{
      this.job=response.map(item=>{
        return new Jobmodeltwo(
          item.jobtitle,
          
         

        )
  });
});
  }





   myuser:any[]=[];
  username:string;

  save(u:string) 
  {
  this.myuser.push(u);
  this.username="";
  }


}