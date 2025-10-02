// src/pages/ProductDetailPage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data'; // Importe a lista de produtos

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  // Encontre o produto com o ID correspondente
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Produto não encontrado</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row items-center md:items-start gap-8">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full md:w-1/2 rounded-lg shadow-lg"
      />
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl text-gray-800 mb-4">${product.price.toFixed(2)}</p>
        <p className="text-lg text-gray-600 mb-6">{product.description}</p>
        <button className="bg-blue-500 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-600 transition-colors">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;