import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FirstService {
  
  constructor() { }
  hello(name :string ) : string{
     return "hello " + name;
  }
}
