import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsModel } from '../assets/bootstrap/models/models';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) {}

generateList():Observable<PostsModel[]>{
  return this.http.get<PostsModel[]>("https://jsonplaceholder.typicode.com/posts");
}
}
