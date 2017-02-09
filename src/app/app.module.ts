import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';


import { AppComponent } from './app.component';
import {DataService} from "./shared/data.service";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PublicationListComponent } from './publication-list/publication-list.component';
import { PublicationDetailComponent } from './publication-detail/publication-detail.component';
import { DateBadgeComponent } from './date-badge/date-badge.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PublicationListComponent,
    PublicationDetailComponent,
    DateBadgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  exports: [

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
