import { Injectable } from '@angular/core';
import {PUBLICATIONS} from "./publications";
import {Publication} from "./publication";

@Injectable()
export class DataService {

  constructor() { }

  getPublications():Promise<Publication[]> {
    return Promise.resolve(PUBLICATIONS);
  }
}
