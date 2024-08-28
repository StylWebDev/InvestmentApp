interface AnnualData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

interface InvestmentInput {
  annualInvestment: number;
  initialInvestment: number;
  expectedReturn: number;
  duration: number;
}

export {type AnnualData, type InvestmentInput  };
