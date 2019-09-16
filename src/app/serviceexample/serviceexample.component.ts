import { Component, OnInit } from '@angular/core';
import { MylibService } from './../mylib.service';
@Component({
  selector: 'app-serviceexample',
  templateUrl: './serviceexample.component.html',
  styleUrls: ['./serviceexample.component.css']
})
export class ServiceexampleComponent implements OnInit {

  constructor(private libObj : MylibService) { }//you can write any thing after private

 itemlist:any[];
 userlist:any[];
citylist:any[];

  ngOnInit() {
    this.itemlist = this.libObj.getitem();
    this.userlist=this.libObj.getuser();
    this.citylist=this.libObj.getcity();
  }

}
