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

  getRequestHeaders(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/getRequestHeaders`, {observe: 'response'})
      .pipe(
        delay(this.apiDealyInMS),
        tap((response) => {
          console.log("response => ", response);
        }),
        map(response => {
          return {'reqH': response.body, 'resH': response.headers}
        })
      );
  }
}
