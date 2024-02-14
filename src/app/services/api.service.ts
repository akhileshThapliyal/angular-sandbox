import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map, shareReplay, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.base_api_url;
  apiDealyInMS = 0;

  constructor(
    private httpClient: HttpClient
  ) { }

  getRequestHeaders(): Observable<{}> {
    return this.httpClient.get<{}>(`${this.baseUrl}/getRequestHeaders`)
      .pipe(
        delay(this.apiDealyInMS),
        tap((response) => {
          console.log("In getRequestHeader => ", response);
        }),
      );
  }

  getResponseHeaders(): Observable<{}> {
    return this.httpClient.get<{}>(`${this.baseUrl}/getResponseHeaders`)
      .pipe(
        delay(this.apiDealyInMS),
        tap((response) => {
          console.log("In getResponseHeader => ", response);
        }),
      );
  }
}
