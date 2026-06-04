
export interface CarItem {
    id: string;
    name: string;
    price: string;
    rating: number;
    variants: number;
    availability: string;
    image: string;
    isFavorite: boolean;

    paymentStatus?: string;
    bookingStatus?: string;
    dateTime?: string;
}