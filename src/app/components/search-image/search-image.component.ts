import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css'],
})
export class SearchImageComponent implements OnInit {
  nameImage: string;

  constructor(private _imageService: ImageService) {
    this.nameImage = '';
  }

  ngOnInit(): void {}

  searchImages() {
    if (this.nameImage === '') {
      this._imageService.setError('Add a search text');
      return;
    }

    this._imageService.SearchImage(this.nameImage);
  }
}
