import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-date-badge',
  templateUrl: './date-badge.component.html',
  styleUrls: ['date-badge.component.scss']
})
export class DateBadgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  date: Date;

}
