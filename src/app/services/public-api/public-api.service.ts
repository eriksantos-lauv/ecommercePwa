import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicApiService {
  private API_URL = 'https://reqres.in/api/';

  constructor(public http: HttpClient) { }

  getAll(page: number) {
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'users/?per_page=10&page=' + page;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
}
