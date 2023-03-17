import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from './cat.model';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor(private http: HttpClient) {}

  getCats(page: number): Observable<Cat[]> {
    return this.http.get(
      `https://api.thecatapi.com/v1/breeds?page=${page}&limit=10`
    ) as Observable<Cat[]>;
  }

  public getData(pageNumber: number, pageSize: number) {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/photos?_start=${pageNumber}&_limit=${pageSize}`
    );
  }
}
