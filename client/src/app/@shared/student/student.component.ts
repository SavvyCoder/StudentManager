import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Student } from "@core/student.model";
/**
 * @title student search result display
 */
@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.scss"],
})
export class StudentComponent implements OnInit {
  @Input() student: Student;
  @Output() getDetails = new EventEmitter<Student>();

  constructor() {}
  ngOnInit() {}
}
