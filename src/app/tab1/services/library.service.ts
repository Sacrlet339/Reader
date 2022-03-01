/* eslint-disable guard-for-in */
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quote-props */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  libraryList = [{
    "id":"0",
    "bookTitle":"My First Book",
    "bookAuthor":"You",
    "bookGenre":"['Musical','Short stories','life lessons','splice of life']",
    "liked":1,
  }];
  constructor() { }
  getLibrary(){
    return this.libraryList;
  }
  addToLibrary(bookData){
    for(const x in this.libraryList){
      if(this.libraryList[x].id === bookData.id ){
        return;
      }
    }
    this.libraryList.push(bookData);
    console.log(this.libraryList);
  }
  removeFromLibrary(id){
    this.libraryList.forEach((value,index)=>{
      if(value.id === id) this.libraryList.splice(index,1);
  });

  console.log(this.libraryList);
  }
  getBook(){}
}
