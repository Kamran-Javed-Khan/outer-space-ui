import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OverviewServiceService {
  apiPrefix: string = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {}

  fetchOverviewResponse() {
    return this.httpClient.get(this.apiPrefix + 'overview');
  }
}
