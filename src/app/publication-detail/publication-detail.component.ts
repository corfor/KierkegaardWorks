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

  private static startOfSecondAuthorship: Date = new Date('1846-03-28');
  private static startOfFirstAuthorship: Date = new Date('1841-09-29');

  constructor() {

  }

  ngOnInit() {
  }

  @Input()
  publication: Publication;

  getAuthorship(): string[] {
    if (this.publication.type != 'Book') return [];
    if (this.publication.date > PublicationDetailComponent.startOfSecondAuthorship) return ['second-authorship'];
    if (this.publication.date > PublicationDetailComponent.startOfFirstAuthorship) {
      if (this.publication.author === 'S. Kierkegaard')
        return ['first-authorship', 'parallel-authorship-religious'];
      return ['first-authorship', 'parallel-authorship-aesthetic'];
    }
    return [];
  }

  getAuthorshipClass():string{
    return this.getAuthorship().join(' ');
  }

   getIconClass():string{
    return null;
  //   if (this.publication.Type)
   }

}
