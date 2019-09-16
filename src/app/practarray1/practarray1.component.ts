import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practarray1',
  templateUrl: './practarray1.component.html',
  styleUrls: ['./practarray1.component.css']
})
export class Practarray1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myuser:any[]=[];
  fname:string;
  fage:string;
  fsalary:string;
  save(n:string,a:string,s:string)
  {
    var newuser={"name":n,"age":a,"city":s};
    this.myuser.push(newuser);
     

  }

}
