import {Component, OnInit, Input} from '@angular/core';
import {Publication} from "../shared/publication";
import {DataService} from "../shared/data.service";
import {PublicationDetailComponent } from "../publication-detail/publication-detail.component"

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css'],
})
export class PublicationListComponent implements OnInit {

  private static startOfSecondAuthorship: Date=  new Date('1846-03-28');
  private static startOfFirstAuthorship: Date= new Date('1841-09-29');

  constructor(private dataService: DataService) {
    this.all=[];
    this.books=[];
    this.articles=[];
    this.pamphlets=[];
  }

  ngOnInit() {
    this.dataService.getPublications().then(data =>
    {
      this.all = data;
      this.books = data.filter(p => p.Type!='Article' && p.Type!='Pamphlet');
      this.articles = data.filter(p => p.Type=='Article');
      this.pamphlets = data.filter(p => p.Type=='Pamphlet');
    });
  }

  all:Publication[];
  books:Publication[];
  articles:Publication[];
  pamphlets:Publication[];

  @Input()
  publications:Publication[];

  getClass(pub:Publication):string {
    //console.log('checking ' + pub.Title);
    if (pub.Type) return null;
    if (pub.Date >  PublicationListComponent.startOfSecondAuthorship) return 'second-authorship';
    if (pub.Date > PublicationListComponent.startOfFirstAuthorship) {
      if (pub.Author === 'S. Kierkegaard')
        return 'first-authorship parallel-authorship-religious';
      return 'first-authorship parallel-authorship-aesthetic';
    }

    return null;
  }

  getIcon(pub:Publication):string
  {
    switch (pub.Type){
      case 'Article': return 'fa fa-file-o article';
      case 'Pamphlet': return 'fa fa-file-o pamphlet';
      default: return 'fa fa-book';
    }
  }

}
