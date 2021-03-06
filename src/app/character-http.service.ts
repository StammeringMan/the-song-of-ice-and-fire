import { Injectable } from '@angular/core';

//importing Http Client to make the request
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//importing observables related code
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { delay } from 'rxjs/operators';



@Injectable()

export class CharacterHttpService {
  public allCharacters;
  public currentCharacter;
  public baseUrl = 'https://anapioficeandfire.com/api';


  constructor(private _http: HttpClient) {
    console.log("Character Http service was called");
  }

  // Exception Handler
  private handleError(err : HttpErrorResponse ){
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message);
  }

  // method to return all Characters

  public getAllCharacters():any {

    let myResponse = this._http.get(this.baseUrl+'/characters');
    console.log(myResponse);
    return myResponse;

  }

  // method to return single Character Informations
  public getSingleCharacterInfo(currentId):any{
    let myResponse = (this._http.get(this.baseUrl+'/characters/'+ currentId)).pipe(delay(2000));
    console.log(myResponse);
    return myResponse;
  }
  //end get Charecter info function
}
