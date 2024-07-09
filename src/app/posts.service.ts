import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDetailsModel, PostsModel } from '../assets/bootstrap/models/models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) {}

generateList():Observable<PostsModel[]>{
  return this.http.get<PostsModel[]>("https://jsonplaceholder.typicode.com/posts");
}

generatePage(id:string):Observable<PostDetailsModel[]>{
  return this.http.get<PostDetailsModel[]>("https://jsonplaceholder.typicode.com/comments?postId=1&id="+id);
}

}
