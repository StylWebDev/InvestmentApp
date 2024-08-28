import {Injectable} from '@angular/core';
import {InvestmentInput, AnnualData} from './calculator.model';

@Injectable({providedIn: 'root'})
export class InvestmentService {

  results: AnnualData[] = []

  calculateInvestmentResults(data: InvestmentInput):void {
    const {annualInvestment, initialInvestment, expectedReturn, duration } = data;

    let investmentValue = initialInvestment;
    let annualData = [];

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;

      annualData.push({
        year: year,
        interest:  parseFloat(interestEarnedInYear.toFixed(2)),
        valueEndOfYear: parseFloat(investmentValue.toFixed(2)),
        annualInvestment: parseFloat(annualInvestment.toFixed(2)),
        totalInterest: parseFloat(totalInterest.toFixed(2)),
        totalAmountInvested: parseFloat((initialInvestment + annualInvestment * year).toFixed(2)),
      });

      this.results = annualData;
    }
  }
}
