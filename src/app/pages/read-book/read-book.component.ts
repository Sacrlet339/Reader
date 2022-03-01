/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import { Component, OnInit } from '@angular/core';
import my_first_book from '../../../assets/books/my_first_book.json';
@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.scss'],
})
export class ReadBookComponent implements OnInit {
  public countryList: {chapter_no: string, chapter_content: string}[] = my_first_book;
  constructor() {
    // console.log('countryList', this.countryList);
   }

  ngOnInit() {}

}
