import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-json2',
  templateUrl: './json2.component.html',
  styleUrls: ['./json2.component.css']
})
export class Json2Component implements OnInit {

  constructor(private Obj:HttpClient) { }

  ngOnInit() {
    this.hari();//to execute the page loading time
  }
  r:number=1;
  searchkey:string;
 itemlist:any[];
 totalitem:string="please wait processing...";
hari()
 {
   var url="http://cybotrix.com/angularapi/getrecord.php";
   this.Obj.get(url).subscribe(
     response =>{
       this.itemlist =response as string[];
       this.totalitem="total item is:"+this.itemlist.length;

     }
   );
 }
}
