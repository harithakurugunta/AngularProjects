import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Jobmodel} from "./jobmodel";//model for data exchange
import {Jobmodeltwo} from "./jobmodel2";//model for data exchange
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyjobService {

  constructor(private httpObj:HttpClient) { }

  public getdesignation() : Observable <Jobmodel[]>
  {
   var url = "http://jobswalkin.com/api/getkeyword";
    return this.httpObj.get<Jobmodel[]>(url);
  }

  public getjob() : Observable <Jobmodeltwo[]>
  {
    const url = "http://jobswalkin.com/api/getjob";
    return this.httpObj.get<Jobmodeltwo[]>(url);
  }

}
