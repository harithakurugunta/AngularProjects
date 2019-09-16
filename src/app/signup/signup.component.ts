import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import{HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private Obj:HttpClient, private formObj: FormBuilder) {}

  myform:FormGroup;
  pagesubmit=false;//it always be flase otherwise get eror in submit time
  
   ngOnInit() {
    this.myform=this.formObj.group
    (
      {
      fname:["", Validators.required],
      emailid:["", [Validators.required, Validators.email]],
      msg:["", Validators.required],
      pass:["",Validators.required],
      cpass:["",Validators.required],
      mobile:["",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
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
 