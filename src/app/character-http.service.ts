import { Injectable } from '@angular/core';

//importing Http Client to make the request
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//importing observables related code
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { filter } from 'rxjs/operators';



@Injectable()

export class CharacterHttpService {
  public allCharacters;
  public currentCharacter;
  public baseUrl = 'https://anapioficeandfire.com/api';


  constructor(private _http: HttpClient) {
    console.log("Character Http service was called");
  }

  // method to return all Characters

  public getAllCharacters():any {

    let myResponse = this._http.get(this.baseUrl+'/characters');
    console.log(myResponse);
    return myResponse;

  }

  // method to return single Character Informations
  public getSingleCharacterInfo(currentId):any{
    let myRespinse = this._http.get(this.baseUrl+'/characters/'+ currentId);
  }
  //end get Charecter info function
}
