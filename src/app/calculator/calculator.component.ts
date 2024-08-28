import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {FlexComponent} from "../flex/flex.component";
import {InvestmentService} from "./calculator.service";

type Duration = 1 | 2 | 5 | 10 | 15 | 20

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, FlexComponent],
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent {
  constructor(private investmentService: InvestmentService) {}

  errMsg = "";
  annualInvestment = signal<number>(0);
  initialInvestment = signal<number>(0);
  expectedReturn:number = 0;
  duration:Duration = 10;

  calculateResults() {
    if (isNaN(+this.annualInvestment()) || isNaN(+this.initialInvestment()) || isNaN(+this.expectedReturn) || (isNaN(+this.duration) || parseInt(this.duration.toString()) > 10 || parseInt(this.duration.toString()) < 1))
    {
      this.errMsg = "Please enter valid numbers";
    }
    else {
      this.errMsg = "";
      this.investmentService.calculateInvestmentResults(
        {
          annualInvestment: parseFloat(this.annualInvestment().toString()),
          initialInvestment: parseFloat(this.initialInvestment().toString()),
          expectedReturn: parseFloat(this.expectedReturn.toString()) ,
          duration: parseFloat(this.duration.toString())
        }
    )
      this.annualInvestment.set(0);
      this.initialInvestment.set(0);
      this.expectedReturn = 0;
      this.duration = 10;
    }

  }
}
