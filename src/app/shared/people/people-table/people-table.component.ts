import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {
  @Input() public header: string;
  @Input() public people: Array<Person>;

  constructor(private activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    if (!this.header) {
      this.header = this.activatedRoute.snapshot.data.header;
    }

    if (!this.people) {
      this.people = this.activatedRoute.snapshot.data.people;
    }
  }
}
