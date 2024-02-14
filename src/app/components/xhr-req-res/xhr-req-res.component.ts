import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-xhr-req-res',
  templateUrl: './xhr-req-res.component.html',
  styleUrl: './xhr-req-res.component.scss'
})
export class XhrReqResComponent implements OnInit {

  requestHeaders = {};
  responseHeaders = {};

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    //TODO
  }

  fetchRequestHeaders(): void {
    this.apiService.getRequestHeaders().subscribe((response) => {
      this.requestHeaders = response;
    });

    this.apiService.getResponseHeaders().subscribe((response) => {
      this.responseHeaders = response;
    });
  }
}
