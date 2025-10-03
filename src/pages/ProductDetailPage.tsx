// src/pages/ProductDetailPage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Produto não encontrado</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="container mx-auto p-4 md:p-8 mt-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white p-6 rounded-xl shadow-lg">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full max-w-md h-auto rounded-lg shadow-md object-cover transition-all duration-300 hover:scale-105"
          />
        </div>

        <div className="flex-1 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">{product.description}</p>

          <button
            onClick={handleAddToCart}
            className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-md text-lg font-semibold shadow hover:opacity-90 transition"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;