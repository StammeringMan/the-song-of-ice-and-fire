import { Injectable } from '@angular/core';

@Injectable()

export class HouseService {

  public currentHouse;

  constructor() {

    console.log("ouseService Constructor is called");
  }
}
