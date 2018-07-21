import { Injectable } from '@angular/core';

//importing Http Client to make the request
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//importing observables related code
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { delay } from 'rxjs/operators'



@Injectable()

export class HouseHttpService {
  public allHouses;
  public currentHouse;
  public baseUrl = 'https://anapioficeandfire.com/api';


  constructor(private _http: HttpClient) {
    console.log("House Http service was called");
  }

  // Exception Handler
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message);
  }

  // method to return all Characters

  public getAllHouses(): any {

    let myResponse = this._http.get(this.baseUrl + '/houses');
    console.log(myResponse);
    return myResponse;

  }

  // method to return single Character Informations
  public getSingleHouseInfo(currentId): any {
    let myResponse = (this._http.get(this.baseUrl + '/houses/' + currentId)).pipe(delay(2000));
    console.log(myResponse);
    return myResponse;
  }
  //end get Charecter info function
}
