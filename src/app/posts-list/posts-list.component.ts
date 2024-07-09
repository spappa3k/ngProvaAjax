import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { HttpClient } from '@angular/common/http';
import { PostsModel } from '../../assets/bootstrap/models/models';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  posts:PostsModel[]=[];

constructor(public ps:PostsService){}

ngOnInit(): void {
  this.ps.generateList().subscribe(data=>{
    this.posts=data;
    console.log(this.posts);
    })
}


}
