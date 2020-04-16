import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Student } from "@core/student.model";
/**
 * @title Input with a clear button
 */
@Component({
  selector: "app-student-details",
  templateUrl: "./student_details.component.html",
  styleUrls: ["./student_details.component.scss"],
})
export class StudentDetailsComponent implements OnInit {
  @Input() student: Student;
  @Output() returnToSearch = new EventEmitter<boolean>();
  constructor() {}
  ngOnInit() {}
}
