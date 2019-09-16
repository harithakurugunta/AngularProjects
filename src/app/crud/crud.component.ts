import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private obj:HttpClient) { }
//crud create,read,update,delete
  ngOnInit() {
    this.userlist();
  }
  user:any[];
  totaluser:string="please wait...";
  url:string="http://dummy.restapiexample.com/api/v1/";
  userlist()
  {
    this.obj.get(this.url+"getrecord.php").subscribe(
      response=>{
         this.user=response as string[];
         this.totaluser="total user:"+this.user.length;
      });
  }

  deleteuser(userid:number)
  {
    //alert(userid);//
 this.totaluser="please wait processing...";
    var jsondata={"id":userid};
    // calling input we should use post not get. here we call jsondata
    this.obj.post(this.url+"delete.php", jsondata).subscribe(
      response=>{
         this.totaluser=response as string;
         this.userlist(); //to reload the list
      });
  }
  fname:string;
  mobile:number;
  message:string;

  save()
  {
    if(this.userid !=0)
    {
      this.update();
    }else{

    }
    var jsondata={"name":this.fname, "mobile":this.mobile,"message":this.message};
   
    this.totaluser="please wait processing...";
    
    // calling input we should use post not get here we call jsondata
    this.obj.post(this.url+"save.php", jsondata).subscribe(
      response=>{
         this.totaluser=response as string;
         this.userlist(); //to reload the list
         this.fname="";
         this.mobile=0;
         this.message="";
      });
  }
  btntext:string="save";

userid:number=0;
 edit(index:number)
  {
    this.btntext="update";
    this.userid=this.user[index].id;
 this.fname= this.user[index].name;// we get data from user array thats why we use user here
 this.mobile= this.user[index].mobile;
 this.message= this.user[index].message;

  }

  update()
  {
    var jsondata={"name":this.fname, "mobile":this.mobile,"message":this.message,"id":this.userid};
   
    this.totaluser="please wait processing...";
    
    // calling input we should use post not get here we call jsondata
    this.obj.post(this.url+"updaterecord.php", jsondata).subscribe(
      response=>{
         this.totaluser=response as string;
         this.userlist(); //to reload the list
         this.fname="";
         this.mobile=0;
         this.message="";
         this.btntext="save";
         this.userid=0;
      });
  }

}
