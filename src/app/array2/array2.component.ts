import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array2',
  templateUrl: './array2.component.html',
  styleUrls: ['./array2.component.css']
})
export class Array2Component implements OnInit {

  constructor() { }

  ngOnInit() {}
 myuser:any[]=[
  {"name":"hari","age":24,"city":"kvl"},
  {"name":"sri","age":29,"city":"kvl1"},
 ];
 iname:string;
 iage:string;
 icity:string;
 
saveuser(n:string,a:string,c:string)
{
   var newuser={"name":n,"age":a,"city":c};
 this.myuser=this.myuser.concat(newuser);
  this.iname="";
  this.iage="";
  this.icity="";
  
}
deluser(index:number)

{
  this.myuser.splice(index,1);
}
}
