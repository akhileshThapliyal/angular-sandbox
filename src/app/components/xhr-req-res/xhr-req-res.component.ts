import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-xhr-req-res',
  templateUrl: './xhr-req-res.component.html',
  styleUrl: './xhr-req-res.component.scss'
})
export class XhrReqResComponent implements OnInit {

  requestHeaders = {};
  responseHeaders : any = {};

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    //TODO
  }

  fetchRequestHeaders(): void {
    this.requestHeaders = {};
    this.responseHeaders = {};

    this.apiService.getRequestHeaders().subscribe((response) => {
      this.requestHeaders = response.reqH;

      //Iterate through headers
      var resHeaders: any = {};
      response.resH.keys().forEach((key: string) => {
        resHeaders[key] = response.resH.get(key);
      });

      this.responseHeaders = resHeaders;
    });
  }
}
