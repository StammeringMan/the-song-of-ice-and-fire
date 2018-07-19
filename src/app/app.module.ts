import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Router Module for Application level Route
import { RouterModule, Routes } from '@angular/router';

//importing components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookViewComponent } from './book-view/book-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { NotfoundComponent } from './notfound/notfound.component';

//import statement for service
import { BookService } from './book.service';
import { BookHttpService } from './book-http.service';
import { CharacterService } from './character.service';
import { CharacterHttpService } from './character-http.service';

import { HttpClientModule } from '@angular/common/http';

//decorators
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookViewComponent,
    // NotfoundComponent,
    CharacterViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'books/:name', component: BookViewComponent },
      { path: 'characters/:id', component: CharacterViewComponent},
      // { path: '**', component: NotfoundComponent }
    ]),
    HttpClientModule
  ],
  providers: [BookService, BookHttpService, CharacterService, CharacterHttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
