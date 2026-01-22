import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Percent, Calendar } from 'lucide-react';

interface MortgageCalculatorProps {
  initialPrice?: number;
}

const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({ initialPrice = 0 }) => {
  const [price, setPrice] = useState<number>(initialPrice);
  const [downPayment, setDownPayment] = useState<number>(initialPrice * 0.2);
  const [interestRate, setInterestRate] = useState<number>(18); // Typical UGX mortgage rate
  const [loanTerm, setLoanTerm] = useState<number>(15);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  useEffect(() => {
    calculateMortgage();
  }, [price, downPayment, interestRate, loanTerm]);

  // Update down payment when price changes if it was set to default 20%
  useEffect(() => {
    if (initialPrice > 0) {
        setPrice(initialPrice);
        setDownPayment(initialPrice * 0.2);
    }
  }, [initialPrice]);

  const calculateMortgage = () => {
    const principal = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (principal <= 0) {
      setMonthlyPayment(0);
      return;
    }

    if (interestRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
      return;
    }

    const mortgage =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthlyPayment(isFinite(mortgage) ? mortgage : 0);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="flex items-center gap-2 mb-6 text-brand-700">
        <Calculator className="h-6 w-6" />
        <h3 className="text-xl font-bold">Mortgage Calculator</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Price (UGX)</label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">UGX</span>
            </div>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="focus:ring-brand-500 focus:border-brand-500 block w-full pl-12 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Down Payment (UGX)</label>
          <div className="relative rounded-md shadow-sm">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">UGX</span>
            </div>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="focus:ring-brand-500 focus:border-brand-500 block w-full pl-12 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {((downPayment / (price || 1)) * 100).toFixed(1)}% of property value
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="focus:ring-brand-500 focus:border-brand-500 block w-full pr-8 sm:text-sm border-gray-300 rounded-md py-2 border px-3"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Percent className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Loan Term (Years)</label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="focus:ring-brand-500 focus:border-brand-500 block w-full pr-8 sm:text-sm border-gray-300 rounded-md py-2 border px-3"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Calendar className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-brand-50 p-4 rounded-lg text-center">
          <p className="text-sm text-brand-800 font-medium uppercase tracking-wide">Estimated Monthly Payment</p>
          <p className="text-3xl font-extrabold text-brand-900 mt-2">
            {formatCurrency(monthlyPayment)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
