import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MainInterface } from '../interfaces/main.interface';
import EndpointsJSON from '../endpoints/endpoints.json';

@Injectable({
  providedIn: 'root'
})
export class SourceDataService {

  endpoints: any = {};

  constructor(private http: HttpClient) {
    this.endpoints = EndpointsJSON;
  }

  getMain(): Observable<MainInterface> {
    const mainEndpoint = this.endpoints.main;
    return this.http.get<MainInterface>(mainEndpoint);
  }
}
