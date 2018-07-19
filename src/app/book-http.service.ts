import { Injectable } from '@angular/core';

//importing Http Client to make the request
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//importing observables related code
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

@Injectable()

export class BookHttpService {

  public allBooks;
  public currentBook;
  public baseUrl = 'https://anapioficeandfire.com/api';


  constructor(private _http: HttpClient) {
    console.log("Book Http service was called");
  }

  // method to return all Books

  public getAllBooks(): any {

    let myResponse = this._http.get(this.baseUrl+'/books');
    console.log(myResponse);
    return myResponse;

  }

  // method to return single Book Informations
  public getSingleBookInfo(currentBookName): any {

    let myResponse = this._http.get(this.baseUrl + '/books?name=' + currentBookName);
    console.log(myResponse);
    return myResponse;
  } // end get book info function

}
