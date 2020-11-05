import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { Image } from '../shared/image';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  getImages(txt:string){
    let source = baseURL+'q=' + txt;
    console.log(source);
    return this.http.get(source);
  }
}
