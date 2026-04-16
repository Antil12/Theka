export type ProductCategory =
  | "whiskey"
  | "vodka"
  | "wine"
  | "rum"
  | "gin"
  | "beer";

export interface TastingNotes {
  nose: string;
  palate: string;
  finish: string;
}

export interface Product {
  id: string;
  name: string;
  type: ProductCategory;
  image: string;
  shortDescription: string;
  description: string;
  price: number;
  alcoholPercentage: number;
  tastingNotes: TastingNotes;
  rating: number;
  featured: boolean;
  year: number;
  badge?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string; // ISO format or formatted string
  location: string;
  image: string;
  description: string;
  isPast: boolean;
}

export interface Store {
  id: string;
  name: string;
  city: string;
  address: string;
  hours: string;
  phone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
