import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//Router Module for Application level Route
import { RouterModule, Routes } from '@angular/router';

//Importing Loader
import { NgxSpinnerModule } from 'ngx-spinner';

//importing components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookViewComponent } from './book-view/book-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { HttpClientModule } from '@angular/common/http';

//import statement for service
import { BookService } from './book.service';
import { BookHttpService } from './book-http.service';
import { CharacterService } from './character.service';
import { CharacterHttpService } from './character-http.service';
import { HouseService } from './house.service';
import { HouseHttpService } from './house-http.service';

//decorators
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookViewComponent,
    // NotfoundComponent,
    CharacterViewComponent,
    HouseViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'books/:name', component: BookViewComponent },
      { path: 'characters/:id', component: CharacterViewComponent },
      { path: 'houses/:id', component:HouseViewComponent }
      // { path: '**', component: NotfoundComponent }
    ]),
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [BookService, BookHttpService, CharacterService, CharacterHttpService, HouseService, HouseHttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
