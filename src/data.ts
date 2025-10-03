// src/data.ts
import type { Product } from './types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone X',
    price: 999.99,
    description: 'Um smartphone de última geração com câmera de alta resolução.',
    imageUrl: 'https://picsum.photos/seed/smartphone/250/250',
  },
  {
    id: '2',
    name: 'Notebook Pro',
    price: 1500.00,
    description: 'Notebook potente ideal para trabalho e jogos.',
    imageUrl: 'https://picsum.photos/seed/notebook/250/250',
  },
  {
    id: '3',
    name: 'Mouse Gamer',
    price: 75.50,
    description: 'Mouse ergonômico com alta precisão para gamers.',
    imageUrl: 'https://picsum.photos/seed/mouse/250/250',
  },
  {
    id: '4',
    name: 'Teclado Mecânico',
    price: 120.00,
    description: 'Teclado com switches mecânicos e iluminação RGB.',
    imageUrl: 'https://picsum.photos/seed/keyboard/250/250',
  },
  {
    id: '5',
    name: 'Monitor Ultrawide',
    price: 350.00,
    description: 'Monitor curvo de 27 polegadas para uma experiência imersiva.',
    imageUrl: 'https://picsum.photos/seed/monitor/250/250',
  },
  {
    id: '6',
    name: 'Headset com Fio',
    price: 89.90,
    description: 'Fone de ouvido com áudio de alta fidelidade e microfone integrado.',
    imageUrl: 'https://picsum.photos/seed/headset/250/250',
  },
  {
    id: '7',
    name: 'Placa de Vídeo RTX',
    price: 650.00,
    description: 'Placa de vídeo de alto desempenho para jogos em 4K.',
    imageUrl: 'https://picsum.photos/seed/gpu/250/250',
  },
  {
    id: '8',
    name: 'Webcam HD',
    price: 60.00,
    description: 'Webcam com resolução Full HD para videoconferências.',
    imageUrl: 'https://picsum.photos/seed/webcam/250/250',
  },
  {
    id: '9',
    name: 'Disco SSD 1TB',
    price: 110.00,
    description: 'Armazenamento rápido e seguro para seu computador.',
    imageUrl: 'https://picsum.photos/seed/ssd/250/250',
  },
  {
    id: '10',
    name: 'Impressora Multifuncional',
    price: 190.50,
    description: 'Imprime, copia e digitaliza com alta velocidade.',
    imageUrl: 'https://picsum.photos/seed/printer/250/250',
  },
  {
    id: '11',
    name: 'Smartwatch Fitness',
    price: 130.00,
    description: 'Relógio inteligente para monitorar atividades físicas e saúde.',
    imageUrl: 'https://picsum.photos/seed/smartwatch/250/250',
  },
];