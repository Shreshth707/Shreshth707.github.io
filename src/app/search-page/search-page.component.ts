import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Image } from '../shared/image';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  params:Params;
  images:Image[];
  txt:string;
  constructor(private route:ActivatedRoute,
    private imageService:ImageService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>this.params = params);
    this.imageService.getImages(this.params['txt']).subscribe(data=>this.images = data['hits']);
  }

}
