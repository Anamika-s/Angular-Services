import { Component, OnInit } from "@angular/core";
import { StudentService } from "../student.service";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  students : any[];
  constructor(private _studentServive : StudentService) { }

  ngOnInit(): void {
    console.log("Calling service");
    this.students = this._studentServive.GetStudents();
  }

}
