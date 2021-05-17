import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MainInterface } from '../interfaces/main.interface';
import EndpointsJSON from '../endpoints/endpoints.json';
import { DetailInterface } from '../interfaces/detail.interface';

export interface Endpoints {
  main: string;
  details: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SourceDataService {

  endpoints: Endpoints;

  constructor(private http: HttpClient) {
    this.endpoints = EndpointsJSON;
  }

  getMain(): Observable<MainInterface> {
    const mainEndpoint = this.endpoints.main;
    return this.http.get<MainInterface>(mainEndpoint);
  }

  getDetail(index: number): Observable<DetailInterface> {
    const detailEndpoint = this.endpoints.details[index];
    return this.http.get<DetailInterface>(detailEndpoint);
  }
}
