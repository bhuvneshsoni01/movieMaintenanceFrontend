import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl = 'http://127.0.0.1:8000';

  constructor(private http:HttpClient) { }

  getMovieList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/movie-list/')
  }
  getActorList():Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/actor-list/')
  }
  upvote_trigger(movie_flag:any){
    // console.log("inside shared services upvote trigger ",movie_flag);
    // axios.put(this.APIurl + '/movie-vote/', JSON.stringify(movie_flag))
    // .then((res) => {
    //   console.log("DATA: ", res.data)
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
    return this.http.put(this.APIurl + '/movie-vote/',movie_flag);
  }
}
