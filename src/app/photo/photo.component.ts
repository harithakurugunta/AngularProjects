import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { MylibService } from './../mylib.service';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private Obj:HttpClient, private libObj : MylibService){ }

  city:any[];


  ngOnInit() 
  {
    this.city=this.libObj.getcity();
  }

}
