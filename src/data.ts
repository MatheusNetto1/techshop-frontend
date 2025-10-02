// src/data.ts

import type { Product } from './types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone X',
    price: 999.99,
    description: 'Um smartphone de última geração com câmera de alta resolução.',
    imageUrl: 'https://via.placeholder.com/250/0000FF/FFFFFF?text=Smartphone+X',
  },
  {
    id: '2',
    name: 'Notebook Pro',
    price: 1500.00,
    description: 'Notebook potente ideal para trabalho e jogos.',
    imageUrl: 'https://via.placeholder.com/250/FF0000/FFFFFF?text=Notebook+Pro',
  },
  {
    id: '3',
    name: 'Mouse Gamer',
    price: 75.50,
    description: 'Mouse ergonômico com alta precisão para gamers.',
    imageUrl: 'https://via.placeholder.com/250/00FF00/FFFFFF?text=Mouse+Gamer',
  },
  {
    id: '4',
    name: 'Teclado Mecânico',
    price: 120.00,
    description: 'Teclado com switches mecânicos e iluminação RGB.',
    imageUrl: 'https://via.placeholder.com/250/FFFF00/000000?text=Teclado+Mecânico',
  },
];