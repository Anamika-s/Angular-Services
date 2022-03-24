import { Component } from "@angular/core";
 
import { FirstService } from "./first.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "AngularHttpClientGetDemo";
  name :string="";
  msg : string="";
  constructor(private first : FirstService)
  {
         
  }
  CallHelloService()
  { 
   this.msg = this.first.hello(this.name);

  }
}
