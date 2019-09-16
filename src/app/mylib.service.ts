import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MylibService {

  constructor() { }
  getitem()
  {
      let item=["apple","mouse","orange"];
      return item;
  }

  getuser()
  {
    
    let user=[
      {"name":"aaaa","age":"3 years"},
      {"name":"eeeeee","age":"5 years"},
      {"name":"qrte","age":"7 years"},
      {"name":"wwwww","age":"6 years"}
    ];
    return user;
  }

  getcity()
  {
let city=[
  {"name":"goa",   "popu":"333"},
  {"name":"delhi",  "popu":"444"},
  {"name":"kvl",     "popu":"555"},
  {"name":"nlr",     "popu":"666"}
];
return city;
  }

}
