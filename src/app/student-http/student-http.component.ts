import { Component, OnInit } from "@angular/core";
import { IStudent } from "src/IStudent";
import { StudentHttpService } from "../student-http.service";

@Component({
  selector: "app-student-http",
  templateUrl: "./student-http.component.html",
  styleUrls: ["./student-http.component.css"]
})
export class StudentHttpComponent implements OnInit {

  students : IStudent[];
  constructor(private _studentservice : StudentHttpService) { }

  ngOnInit(): void {
     this._studentservice.GetStudents().subscribe(res => 
    this.students= res);
  }

}
