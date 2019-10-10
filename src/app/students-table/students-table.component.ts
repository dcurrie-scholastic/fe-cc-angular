import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  public students: Array<Student> = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this.students = this.activatedRoute.snapshot.data.students;
  }
}
