import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-list-image',
  templateUrl: './list-image.component.html',
  styleUrls: ['./list-image.component.css'],
})
export class ListImageComponent implements OnInit {
  fin = '';
  suscription: Subscription;
  listimages: any[] = [];
  loading = false;
  imagePerPage = 30;
  actualPage = 1;
  calculateTotalPages = 0;

  constructor(private _imageService: ImageService) {
    this.suscription = this._imageService.getImage().subscribe((data) => {
      this.fin = data;
      this.actualPage = 1;
      this.loading = true;
      this.getPictures();
    });
  }

  ngOnInit(): void {}

  getPictures() {
    this._imageService
      .getImages(this.fin, this.imagePerPage, this.actualPage)
      .subscribe(
        (data) => {
          this.loading = false;
          console.log(data);
          if (data.hits.length === 0) {
            this._imageService.setError('Opss .. we did not find any results');
            return;
          }
          this.calculateTotalPages = Math.ceil(
            data.totalHits / this.imagePerPage
          );

          this.listimages = data.hits;
        },
        (error) => {
          this._imageService.setError('Opss.. ocurrio un error');
          this.loading = false;
        }
      );
  }

  PreviousPage() {
    this.actualPage--;
    this.loading = true;
    this.listimages = [];
    this.getPictures();
  }

  NextPage() {
    this.actualPage++;
    this.loading = true;
    this.listimages = [];
    this.getPictures();
  }

  PreviousPageFunc() {
    if (this.actualPage === 1) {
      return false;
    } else {
      return true;
    }
  }

  NextPageFunc() {
    if (this.actualPage === this.actualPage) {
      return false;
    } else {
      return true;
    }
  }
}
