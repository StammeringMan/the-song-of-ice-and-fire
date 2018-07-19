import { Injectable } from '@angular/core';

@Injectable()

export class CharacterService {

  public currentCharacter;

  constructor() {

    console.log("CharacterService Constructor is called");
  }
}
