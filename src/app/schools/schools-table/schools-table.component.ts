import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schools-table',
  templateUrl: './schools-table.component.html',
  styleUrls: ['./schools-table.component.scss']
})
export class SchoolsTableComponent implements OnInit {
  public schools: Array<School> = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this.schools = this.activatedRoute.snapshot.data.schools;
  }
}
