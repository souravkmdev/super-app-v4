export const formatNumberWithCommas = (value: number | string): string => {
  const num = Number(String(value).replace(/,/g, ''));

  if (isNaN(num)) {
    return '0';
  }

  return num.toLocaleString('en-IN');
};
