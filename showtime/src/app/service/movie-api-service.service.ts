import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

 // movieapi = "https://api.themoviedb.org/3/movie/157336?api_key=61c6b4003f761fbd7597966074f65c8a";

  baseurl = "https://api.themoviedb.org/3";
  apikey = "61c6b4003f761fbd7597966074f65c8a";

  //MovieApiData
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/movie/top_rated?api_key=${this.apikey}`);
  }

  //trendingMovieApiData
  trendingMovieApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/movie/popular?api_key=${this.apikey}`)
  }

  //SearchMovie
  getSearchMovie(data:any):Observable<any>{
    console.log(data, 'movie#');
    
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  //Get Movie Details
  getMovieDetails(data:any):Observable<any>{
    //return this.http.get(`${this.baseurl}/movie/popular?api_key=${this.apikey}`)
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  //Get Movie Videos 
  getMovieVideo(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  //Get Movie Cast
  getMovieCast(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  //Action
  fetchActionMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  //Adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  // thriller:53
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }

}
