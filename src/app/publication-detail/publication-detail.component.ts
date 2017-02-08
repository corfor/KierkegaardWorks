import {Component, OnInit, Input} from '@angular/core';
import {Publication} from "../shared/publication";
import {DateBadgeComponent} from "../date-badge/date-badge.component"

@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.css'],
  providers: [DateBadgeComponent]
})
export class PublicationDetailComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  @Input()
  publication: Publication;

}
