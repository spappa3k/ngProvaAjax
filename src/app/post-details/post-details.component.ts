import { Component, OnInit } from '@angular/core';
import { PostDetailsModel } from '../../assets/bootstrap/models/models';
import { PostsService } from '../posts.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit{
  PostDetails: PostDetailsModel[] = [];

  constructor(public ps:PostsService, private route:ActivatedRoute){}

ngOnInit(): void {
  const id=this.route.snapshot.paramMap.get("id");
  this.ps.generatePage(id!).subscribe(
    data => {
      this.PostDetails = data;
  })
}

}
