import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalRequestService {

  public baseURL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public getHeaders(): HttpHeaders {
    let headers = {};
    headers['Content-Type'] = 'application/json';

    return new HttpHeaders(headers);
  }

  public get(url: string) {
    return this.http.get(`${this.baseURL}${url}`, { headers: this.getHeaders() }).toPromise();
  }

  public post(body: any, url: string) {
    return this.http.post(`${this.baseURL}${url}`, body, { headers: this.getHeaders() }).toPromise();
  }
}
