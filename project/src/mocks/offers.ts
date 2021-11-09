import {Property} from "../types/property";

export const offers: Property[] = [
  {
    id: 1,
    name: 'Beautiful & luxurious apartment at great location',
    photos: [
      'img/apartment-01.jpg'
    ],
    type: 'Apartment',
    price: 120,
    rating: 4,
    isPremium: true
  },
  {
    id: 2,
    name: 'Wood and stone place',
    photos: [
      'img/room.jpg'
    ],
    type: 'Private room',
    price: 80,
    rating: 4,
    isPremium: false
  },
  {
    id: 3,
    name: 'Canal View Prinsengracht',
    photos: [
      'img/apartment-02.jpg'
    ],
    type: 'Apartment',
    price: 132,
    rating: 4,
    isPremium: false
  },
  {
    id: 4,
    name: 'Nice, cozy, warm big bed apartment',
    photos: [
      'img/apartment-03.jpg'
    ],
    type: 'Apartment',
    price: 180,
    rating: 5,
    isPremium: true
  },
];
