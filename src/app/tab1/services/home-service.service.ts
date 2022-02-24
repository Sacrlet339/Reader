/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quote-props */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  booklist = [{
    "id":"1",
    "bookTitle":"Britney Spears",
    "bookAuthor":"Britney Spears",
    "bookGenre":"['Musical','Short stories','life lessons','splice of life']",
    "liked":0,
  },
  {
    "id":"2",
    "bookTitle":"Beyonce Cater",
    "bookAuthor":"Beyonce Cater",
    "bookGenre":"['Musical','Short stories','life lessons','splice of life']",
    "liked":0,
  },
  {
    "id":"3",
    "bookTitle":"Nicki Manaj",
    "bookAuthor":"Nicki Manaj",
    "bookGenre":"['Musical','Short stories','life lessons','splice of life']",
    "liked":0,
  }];
  constructor() { }
  getbooks(){
    return this.booklist;
  }
  likebook(id){
    // console.log(this.booklist.length);
    for (const i of this.booklist) {
      if(i.id === id){
        i.liked = 1;
      }
    }
  }
  unlikebook(id){
    for (const i of this.booklist) {
      if(i.id === id){
        i.liked = 0;
      }
    }
  }
  openbook(id){
    for (const i of this.booklist) {
      if(i.id === id){
        return i;
      }
    }
  }
}
