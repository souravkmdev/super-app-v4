export const filterOptions = [
  {
    key: 'Brand',
    icon: require('../../assets/images/usedcar/brand.png'),
  },
  {
    key: 'Model',
    icon: require('../../assets/images/usedcar/model.png'),
  },
  {
    key: 'Fuel Type',
    icon: require('../../assets/images/usedcar/fuel.png'),
  },
  {
    key: 'Transmission',
    icon: require('../../assets/images/usedcar/transmission.png'),
  },
  {
    key: 'Budget',
    icon: require('../../assets/images/usedcar/budget.png'),
  },
  {
    key: 'Year',
    icon: require('../../assets/images/usedcar/year.png'),
  },
  {
    key: 'Kilometers',
    icon: require('../../assets/images/usedcar/km.png'),
  },
];

export const brands = [
  {
    name: 'BMW',
    logo: require('../../assets/images/usedcar/bmw.png'),
  },
  {
    name: 'Honda',
    logo: require('../../assets/images/usedcar/honda.png'),
  },
  {
    name: 'Maruti Suzuki',
    logo: require('../../assets/images/usedcar/suzuki.png'),
  },
  {
    name: 'Ford',
    logo: require('../../assets/images/usedcar/ford.png'),
  },
  {
    name: 'Toyota',
    logo: require('../../assets/images/usedcar/toyota.png'),
  },
  {
    name: 'Tata',
    logo: require('../../assets/images/usedcar/tata.png'),
  },
  {
    name: 'Jaguar',
    logo: require('../../assets/images/usedcar/jaguar.png'),
  },
];

export const models = [
  'i5 Sportback',
  'A4',
  'A3 Cabriolet',
  'A5',
  'Q7',
  'Q5 Sportback',
  'Q5',
  'Q8 Sportback',
  'Q8',
];

export const fuelTypes = [
 'Petrol',
  'Diesel',
  'CNG',
  'Electric',
];

export const transmissions = [
  'Manual',
  'Automatic',
];

export const budgets = [
  {
    title: 'Under ₹5 Lakhs',
    subtitle: 'Find the best cars under',
    value: '₹5,00,000',
  },
  {
    title: '₹5 Lakhs - ₹8 Lakhs',
    subtitle: 'Cars in the range of',
    value: '₹5,00,000 - ₹8,00,000',
  },
  {
    title: '₹8 Lakhs - ₹12 Lakhs',
    subtitle: 'Find the best cars under',
    value: '₹8,00,000 - ₹12,00,000',
  },
  {
    title: '₹12 Lakhs - ₹20 Lakhs',
    subtitle: 'Find the best cars under',
    value: '₹12,00,000 - ₹20,00,000',
  },
  {
    title: 'Above ₹20 Lakhs',
    subtitle: 'Premium cars above',
    value: '₹20,00,000',
  },
];

export const fromYears = Array.from(
  { length: 19 },
  (_, index) => `${2006 + index}`,
);

export const toYears = Array.from(
  { length: 19 },
  (_, index) => `${2006 + index}`,
);

export const kilometers = [
  '10,000 km or less',
  '30,000 km or less',
  '50,000 km or less',
  '1,00,000 km or less',
  '1,25,000 km or less',
  'Above 1,50,000 km',
];

