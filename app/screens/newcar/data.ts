export interface CarItem {
  id: string;
  name: string;
  price: string;
  rating: number;
  variants: number;
  availability: string;
  image: string;
  isFavorite: boolean;
}

export const ARENA_CARS: CarItem[] = [
  {
    id: '1',
    name: 'Grand Vitara ',
    price: '₹12,80,000',
    rating: 5.0,
    variants: 4,
    availability: 'Available from 2 August',
    image:
      'https://assets.kalyanicrm.com/app-version4-development/Card/breeza.png',
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Grand Vitara',
    price: '₹12,80,000',
    rating: 5.0,
    variants: 4,
    availability: 'Available from 2 August',
    image:
      'https://assets.kalyanicrm.com/app-version4-development/Card/dzire.png',
    isFavorite: false,
  },
  {
    id: '3',
    name: 'Grand Vitara',
    price: '₹12,80,000',
    rating: 5.0,
    variants: 4,
    availability: 'Available from 2 August',
    image:
      'https://assets.kalyanicrm.com/app-version4-development/Card/dzire.png',
    isFavorite: false,
  },
];

export const NEXA_CARS: CarItem[] = [
  {
    id: '3',
    name: 'Fronx',
    price: '₹7,51,500',
    rating: 4.8,
    variants: 6,
    availability: 'Latest launch...',
    image:
      'https://assets.kalyanicrm.com/app-version4-development/Card/fronx.png',
    isFavorite: false,
  },
];
