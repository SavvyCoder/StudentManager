import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ClassMap, Student } from "@app/@core";
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
  @Input() classMap: ClassMap;
  @Output() returnToSearch = new EventEmitter<boolean>();

  loopAverage: number[]; 
  partialStar: number;
  partialStarStyles: () => {};

  constructor() {}
  ngOnInit() {
    this.partialStar = this.student.average % 1;
    this.partialStarStyles = () => ({
      background: `-webkit-linear-gradient(left, #f1c40f ${100 * this.partialStar}%, white ${
        (1 - this.partialStar) * 100
      }%)`,
      "-webkit-text-fill-color": "transparent",
      "-webkit-background-clip": "text",
    });
    this.loopAverage = Array(Math.floor(this.student.average));
  }
}
