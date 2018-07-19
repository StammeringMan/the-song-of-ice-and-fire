import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

// importing route related code
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CharacterService } from '../character.service';
import { CharacterHttpService } from '../character-http.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})

export class CharacterViewComponent implements OnInit, OnDestroy {


  public currentCharacter;
  public myCharacterId;

  constructor(private _route: ActivatedRoute, private router: Router, private characterService: CharacterService, private characterHttpService: CharacterHttpService) {
    console.log("Character-view Constructor  called");
  }

  ngOnInit() {
  
    }

  ngOnDestroy() {
    console.log("Character View Component Destroyed");
  }

}
