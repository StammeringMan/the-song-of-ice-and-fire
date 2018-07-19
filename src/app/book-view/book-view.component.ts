import { Component, OnInit, OnDestroy } from '@angular/core';

// importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookHttpService } from '../book-http.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit, OnDestroy {


  public currentBook;

  constructor(private _route: ActivatedRoute, private router: Router, private bookService: BookService, private bookHttpService: BookHttpService) {
    console.log("book-view Constructor  called");
  }

  ngOnInit() {
    console.log("ngOnInit called");

    // getting the name of the book from the route
    let myBookName = this._route.snapshot.paramMap.get('name');
    console.log(myBookName);


    this.bookHttpService.getSingleBookInfo(myBookName).subscribe(

      data => {
        console.log(data);
        this.currentBook = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }

  ngOnDestroy(): void {
    console.log("Bookservice Component Destroyed");
  }



}
