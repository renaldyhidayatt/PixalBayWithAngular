import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private error$ = new Subject<string>();
  private SearchTerm = new Subject<string>();

  constructor(private http: HttpClient) {}

  setError(message: string) {
    this.error$.next(message);
  }

  getError(): Observable<string> {
    return this.error$.asObservable();
  }

  SearchImage(s: string) {
    this.SearchTerm.next(s);
  }

  getImage(): Observable<string> {
    return this.SearchTerm.asObservable();
  }

  getImages(
    ter: string,
    imagePaginate: number,
    actualPage: number
  ): Observable<any> {
    const KEY = '19490852-8f039330ab67e78c28e79eb73';
    const URL =
      'https://pixabay.com/api/?key=' +
      KEY +
      '&q=' +
      ter +
      '&per_page=' +
      imagePaginate +
      '&page=' +
      actualPage;
    return this.http.get(URL);
  }
}
