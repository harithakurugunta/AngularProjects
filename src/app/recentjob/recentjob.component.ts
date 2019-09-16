import { Component, OnInit } from '@angular/core';
import { MyjobService} from './../myjob.service'; // calling service
import {Jobmodel} from '../jobmodel';// calling model
import {Jobmodeltwo} from "../jobmodel2";//model for data exchange
@Component({
  selector: 'app-recentjob',
  templateUrl: './recentjob.component.html',
  styleUrls: ['./recentjob.component.css']
})
export class RecentjobComponent implements OnInit {

  
  constructor(private serviceObj:MyjobService){ }//constructor end


   alldesignation = new Array<Jobmodel>();//variable as array jobmodel is an observable name
   alljob=new Array<Jobmodeltwo>();

  ngOnInit() {
    this.getrole();
    this.getalljob();
  }

  getrole()
  {
    this.serviceObj.getdesignation().subscribe(response=>{
      this.alldesignation=response.map(item=>{
        return new Jobmodel(
          item.designation_name
         
         
        )
  });
});
  }

  getalljob()
  {
    this.serviceObj.getjob().subscribe(response=>{
      this.alljob=response.map(item=>{
        return new Jobmodeltwo(
          item.jobtitle,
          
         

        )
  });
});
  }



}
