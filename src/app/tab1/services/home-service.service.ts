/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quote-props */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  booklist = [{
    "bookTitle":"Britney Spears",
    "bookAuthor":"Britney Spears",
    "bookGenre":"['Musical','Short stories','life lessons','splice of life']",
  },
  {
    "bookTitle":"Beyonce Cater",
    "bookAuthor":"Beyonce Cater",
    "bookGenre":"['Musical','Short stories','life lessons','splice of life']"
  },
  {
    "bookTitle":"Nicki Manaj",
    "bookAuthor":"Nicki Manaj",
    "bookGenre":"['Musical','Short stories','life lessons','splice of life']"
  }];
  constructor() { }
  getbooks(){
    return this.booklist;
  }
}
