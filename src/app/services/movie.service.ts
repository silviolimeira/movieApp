import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //url = 'http://ombbapi.com/';
  url = 'http://localhost:3000/all';
  apiKey = 'https://eur02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fwww.omdbapi.com%2F%3Fi%3Dtt3896198%26apikey%3De868839b&amp;data=02%7C01%7C%7C1b3e1316dbad4d868a4908d6df8171d5%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C636942144378704799&amp;sdata=rvTfamLUzZYt3wSiLctAOS8z5BRFx3r53m3Uuzo83TI%3D&amp;reserved=0';

  /**
   * Constructor of the Service with Depency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }

  /**
   * Get data from the OmdbApi
   * map the result to return only the results that we need
   * 
   * @param {string} title Search Term
   * @param {SearchType} type movie, series, episode or empty
   * @returns Observable with the search resulta
   */
  searchData(title: string, type: SearchType): Observable<any> {
    console.log(`URL:${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`);
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }

  searchMovies(): Observable<any> {
    return this.http.get(this.url);
  }

  /**
   * Get the detailed information for an ID using the "i" parameter
   * 
   * @param {string} id imdbID to retrieve information
   * @returns Observable with detailed information
   */
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

}
