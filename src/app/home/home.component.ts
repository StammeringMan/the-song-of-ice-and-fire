import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '../book.service';
import { BookHttpService } from '../book-http.service';
import { CharacterService } from '../character.service';
import { CharacterHttpService } from '../character-http.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, OnDestroy {

  public allBooks;
  public allCharacters;

  constructor(private bookHttpService: BookHttpService, private characterHttpService: CharacterHttpService) {
    console.log("HomeComponent constructor  called")
  }

  ngOnInit() {
    console.log("HomeComponent OnInit called");

    // method to get All Books
    this.allBooks = this.bookHttpService.getAllBooks().subscribe(

      data => {
        console.log(data);
        this.allBooks = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )

    this.allCharacters = this.characterHttpService.getAllCharacters().subscribe(
      data => {
        console.log(data);
        this.allCharacters = data;
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }  

  ngOnDestroy() {
    console.log("HomeComponent OnDestroy called")
  }


}
