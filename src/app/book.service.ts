import { Injectable } from '@angular/core';

@Injectable()


export class BookService {


  public currentBook;

  constructor() {

    console.log("BookService Constructor is called");
  }

}
