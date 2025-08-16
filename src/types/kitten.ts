export interface Kitten {
  id: string;
  name: string;
  breed: string;
  age: number;
  price: number;
  image: string;
  description: string;
  color: string;
  gender: 'Macho' | 'Hembra';
  vaccinated: boolean;
  available: boolean;
}

export interface CartItem {
  kitten: Kitten;
  quantity: number;
}