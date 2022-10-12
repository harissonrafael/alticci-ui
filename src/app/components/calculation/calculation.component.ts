import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {

  readonly apiURL = 'http://localhost:8080';
  readonly resource = 'alticci';

  result: Object = 0;
  input: number = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  calculate(ev: any): void {
    this.input = 0;
    console.log("calculating...")

    this.http.get(`${this.apiURL}/${this.resource}/` + this.input)
      .subscribe(response => {
        this.result = response;
        console.log("returning ", response);
      });

  }
}
