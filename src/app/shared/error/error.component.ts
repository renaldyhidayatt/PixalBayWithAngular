import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  text = '';
  show = false;
  suscription: Subscription;
  constructor(private _imageService: ImageService) {
    this.suscription = this._imageService.getError().subscribe((data) => {
      this.text = data;
    });
  }

  ngOnInit(): void {}

  onOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  showMessage() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 2000);
  }
}
