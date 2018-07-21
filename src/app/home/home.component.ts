import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '../book.service';
import { BookHttpService } from '../book-http.service';
import { CharacterService } from '../character.service';
import { CharacterHttpService } from '../character-http.service';
import { HouseService } from '../house.service';
import { HouseHttpService } from '../house-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, OnDestroy {

  public allBooks;
  public allCharacters;
  public allHouses;


  constructor(private bookHttpService: BookHttpService, private characterHttpService: CharacterHttpService, private houseHttpService: HouseHttpService) {
    console.log("HomeComponent constructor  called")
  }

  ngOnInit() {
    console.log("HomeComponent OnInit called");

    // method to get All Books
    this.allBooks = this.bookHttpService.getAllBooks().subscribe(

      data => {
        console.log(data);
        this.allBooks = data;
        this.allBooks.sort(function(a,b){
          const firstName = a.name.toLowerCase();
          const secondName = b.name.toLowerCase();
          if(firstName < secondName){
            return -1;
          }else if(firstName > secondName){
            return 1;
          }else{
            return 0;
          }
        });
      },
      error => {
        console.log("Some Error Occured");
        console.log(error.errorMessage);
      }
    )

    this.allCharacters = this.characterHttpService.getAllCharacters().subscribe(
      data => {
        console.log(data);
        this.allCharacters = data;
        this.allCharacters.sort(function(a,b){
          const firstName = a.name.toLowerCase();
          const secondName = b.name.toLowerCase();
          if(firstName < secondName){
            return -1;
          }else if(firstName > secondName){
            return 1;
          }else{
            return 0;
          }
        });
      },
      error => {
        console.log("Some Error Occured");
        console.log(error.errorMessage);
      }
    )

    this.allHouses = this.houseHttpService.getAllHouses().subscribe(
      data => {
        console.log(data);
        this.allHouses = data;
        this.allHouses.sort(function(a,b){
          const firstName = a.name.toLowerCase();
          const secondName = b.name.toLowerCase();
          if(firstName < secondName){
            return -1;
          }else if(firstName > secondName){
            return 1;
          }else{
            return 0;
          }
        });
        
      },
      error => {
        console.log("Some Error Occured");
        console.log(error.errorMessage);
      }
    )
  }

  ngOnDestroy() {
    console.log("HomeComponent OnDestroy called")
  }  
}  