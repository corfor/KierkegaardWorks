import {Component, OnInit, Input} from '@angular/core';
import {Publication} from "../shared/publication";
import {DataService} from "../shared/data.service";
import {PublicationDetailComponent} from "../publication-detail/publication-detail.component"

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css'],
})
export class PublicationListComponent implements OnInit {



  constructor(private dataService: DataService) {
    this.all = [];
    this.books = [];
    this.articles = [];
    this.pamphlets = [];
  }

  ngOnInit() {
    this.dataService.getPublications().then(data => {
      this.all = data;
      this.books = data.filter(p => p.type != 'Article' && p.type != 'Pamphlet');
      this.articles = data.filter(p => p.type == 'Article');
      this.pamphlets = data.filter(p => p.type == 'Pamphlet');
    });
  }

  all: Publication[];
  books: Publication[];
  articles: Publication[];
  pamphlets: Publication[];

  @Input()
  publications: Publication[];

  getIcon(pub: Publication): string {
    switch (pub.type) {
      case 'Article':
        return 'fa fa-file-o article';
      case 'Pamphlet':
        return 'fa fa-file-o pamphlet';
      default:
        return 'fa fa-book';
    }
  }

}
