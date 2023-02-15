import { Component,OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  constructor(private services:SharedService) {}
  actorList:any = [];

  ngOnInit(): void { 
    this.refreshActorList();
  }
  refreshActorList(){
    this.services.getActorList().subscribe(data=>{
      this.actorList = data;
    });
  }
  sortResult(prop:any,asc:boolean){
    this.actorList = this.actorList.sort(function(a:any,b:any){
      if(asc) return (a[prop]>b[prop]) ? 1 : ((a[prop]<b[prop]) ? -1:0);
      else return (a[prop]<b[prop]) ? 1 : ((a[prop]>b[prop]) ? -1:0);
    })
  }

}
