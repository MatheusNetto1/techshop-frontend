// src/components/ProductCard.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types/product';
import { useCart } from '../context/CartContext'; // Importe o hook

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart(); // Use o hook para acessar a função

  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      </Link>
      <button
        onClick={() => addToCart(product)} // Adicione o evento de clique
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;