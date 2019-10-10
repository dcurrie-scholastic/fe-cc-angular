import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teachers-table',
  templateUrl: './teachers-table.component.html',
  styleUrls: ['./teachers-table.component.scss']
})
export class TeachersTableComponent implements OnInit {
  public teachers: Array<Teacher> = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this.teachers = this.activatedRoute.snapshot.data.teachers;
  }
}
