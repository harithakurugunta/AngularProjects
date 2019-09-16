import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';//for form
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private Obj:HttpClient, private formObj: FormBuilder) {}

 myform:FormGroup;
 pagesubmit=false;//it always be flase otherwise get eror in submit time
 
  ngOnInit() {
   this.myform=this.formObj.group
   (
     {
     fname:["", Validators.required],
     emailid:["", [Validators.required, Validators.email]],
     msg:["", Validators.required]
   }
   );
  }
 
  
  savemessage()
  {
    this.pagesubmit=true;
    if(this.myform.invalid)
    {
      return;
    }
    
    alert("your input is valid:\n" + JSON.stringify(this.myform.value));
  }

}
