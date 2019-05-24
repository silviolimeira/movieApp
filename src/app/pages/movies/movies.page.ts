import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieService, SearchType } from './../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  //http://www.ombbapi.com/?s=lord%20of%20rings&type=&apikey=https://eur02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fwww.omdbapi.com%2F%3Fi%3Dtt3896198%26apikey%3De868839b&amp;data=02%7C01%7C%7C1b3e1316dbad4d868a4908d6df8171d5%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C636942144378704799&amp;sdata=rvTfamLUzZYt3wSiLctAOS8z5BRFx3r53m3Uuzo83TI%3D&amp;reserved=0

  //http://www.omdbapi.com/?apikey=[yourkey]&
  
  //http://www.omdbapi.com/?t=Guardians&y=2017&apikey=https://eur02.safelinks.protection.outlook.com/?url=http://www.omdbapi.com%2F%3Fi%3Dtt3896198%26apikey%3De868839b&amp;data=02%7C01%7C%7C1b3e1316dbad4d868a4908d6df8171d5%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C636942144378704799&amp;sdata=rvTfamLUzZYt3wSiLctAOS8z5BRFx3r53m3Uuzo83TI%3D&amp;reserved=0
  searchChanged() {
    // Call our service function which returns an Observable
    //this.results = this.movieService.searchData(this.searchTerm, this.type);
    this.results = this.movieService.searchMovies();
  }

}
