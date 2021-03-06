import { Component, OnInit, OnDestroy } from '@angular/core';


// importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { CharacterHttpService } from '../character-http.service';


//Importing Loader
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})

export class CharacterViewComponent implements OnInit, OnDestroy {


  public currentCharacter;
  public myCharacterId;

  constructor(private _route: ActivatedRoute, private router: Router, private characterService: CharacterService, private characterHttpService: CharacterHttpService, private spinner: NgxSpinnerService) {
    console.log("Character-view Constructor  called");
  }

  ngOnInit() {
    let myCharacterId = this._route.snapshot.paramMap.get('id');
    console.log(myCharacterId);

    this.spinner.show();

    this.characterHttpService.getSingleCharacterInfo(myCharacterId).subscribe(

      data => {
        console.log(data);
        this.currentCharacter = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }


  ngOnDestroy() {
    console.log("Character View Component Destroyed");
  }

}
