import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input('mycar') carlist:any;
@Output() eachcar=new EventEmitter();
passindex(index)

{
  this.eachcar.emit(index);
}
}
