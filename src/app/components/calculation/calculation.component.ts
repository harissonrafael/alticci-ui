import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {

  readonly apiURL = 'http://localhost:8080';
  readonly resource = 'alticci';

  result: string = '0';
  input: number = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  calculate(ev: any): void {
    this.http.get(`${this.apiURL}/${this.resource}/` + this.input, {
      headers: new HttpHeaders({
        'Accept': 'text/html, application/xhtml+xml, */*',
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      responseType: 'text'
    })
      .subscribe(response => {
        this.result = response;
      });

  }
}
