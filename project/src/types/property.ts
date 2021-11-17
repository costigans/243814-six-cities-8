import {Image} from './image';

export type Property = {
  id: number;
  name: string;
  photos: Image[];
  type: string;
  price: number;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
};
