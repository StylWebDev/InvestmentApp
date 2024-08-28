import {InvestmentService } from '../calculator/calculator.service';
import {Component} from '@angular/core';
import {CurrencyPipe, DecimalPipe} from "@angular/common";
import {AnnualData} from "../calculator/calculator.model";

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    DecimalPipe,
    CurrencyPipe
  ],
  templateUrl: './results.component.html',
})
export class ResultsComponent {

  data: AnnualData[] = [];

  constructor(private investmentService: InvestmentService) {}

  get results() {
   return this.investmentService.results;
  }

  //@Input({required: true}) results!:Result[]
  // results = input.required<Result[]>();

}
