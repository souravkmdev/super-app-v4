export const calculateEMI = (
  loanAmount: number | string,
  annualInterestRate: number | string,
  tenure: number | string,
  duration: string,
) => {
  const principal = Number(String(loanAmount).replace(/,/g, ''));
  const rate = Number(annualInterestRate);
  const months = Number(tenure);

  if (isNaN(principal) || isNaN(rate) || isNaN(months) || months <= 0) {
    return {
      emi: 0,
      totalPayment: 0,
      totalInterest: 0,
    };
  }

  const totalMonths = duration === 'M' ? months : months * 12;

  if (rate === 0) {
    return {
      emi: Math.round(principal / totalMonths),
      totalPayment: principal,
      totalInterest: 0,
    };
  }

  const r = rate / 12 / 100;

  const emi =
    (principal * r * Math.pow(1 + r, totalMonths)) /
    (Math.pow(1 + r, totalMonths) - 1);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - principal;

  return {
    emi: Math.round(emi),
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest),
  };
};
