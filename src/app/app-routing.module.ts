import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ActorListComponent } from './actor-list/actor-list.component';

const routes: Routes = [
  {path:'movie-list' , component:MovieListComponent},
  {path:'movie-vote' , component:MovieListComponent},
  {path:'actor-list' , component:ActorListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
