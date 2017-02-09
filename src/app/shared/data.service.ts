import { Injectable } from '@angular/core';
import {PUBLICATIONS} from "./publications";
import {Publication} from "./publication";

@Injectable()
export class DataService {

  constructor() { }

  getPublications():Promise<Publication[]> {
    for (let publication of PUBLICATIONS){
      if (!publication.type){
        publication.type="Book";
      }
    }
    return Promise.resolve(PUBLICATIONS);
  }
}
