import { Injectable } from "@angular/core";
import {HttpClient} from  '@angular/common/http'; 
import { IStudent } from "src/IStudent";
@Injectable({
  providedIn: "root"
})
export class StudentHttpService {
  // students : IStudent[];
  constructor(private _httpclient : HttpClient) { }
  path : string ="/assets/data.json";
  GetStudents ()
  {
    return( this._httpclient.get<IStudent[]>(this.path));
  }
}
