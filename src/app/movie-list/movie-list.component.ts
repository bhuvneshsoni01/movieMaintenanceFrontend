import { Component,OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  constructor(private services:SharedService) {}
  movieList:any = [];

  ngOnInit(): void {
    this.refreshMovieList();
  }
  refreshMovieList(){
    this.services.getMovieList().subscribe(data=>{
      this.movieList = data;
    });
  }
  sortResult(prop:any,asc:boolean){
    this.movieList = this.movieList.sort(function(a:any,b:any){
      if(asc) return (a[prop]>b[prop]) ? 1 : ((a[prop]<b[prop]) ? -1:0);
      else return (a[prop]<b[prop]) ? 1 : ((a[prop]>b[prop]) ? -1:0);
    })
  }
  upvote_signal(title:string,flag:string){
    console.log("inside component.ts upvote trigger",title);
    this.services.upvote_trigger({'title':title , 'flag':flag}).subscribe(data=>{
      this.refreshMovieList();
    })
  }
}
