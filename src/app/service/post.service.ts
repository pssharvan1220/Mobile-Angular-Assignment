import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = "https://jsonplaceholder.typicode.com"

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get<Post[]>(`${this.url}/posts`);
  }
}
