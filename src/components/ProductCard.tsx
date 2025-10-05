// src/components/ProductCard.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types/product';
import { useCart } from '../context/CartContext';
import Modal from './Modal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
        <Link to={`/products/${product.id}`}>
          <div className="aspect-square overflow-hidden bg-gray-100 relative">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 space-y-3">
            <h3 className="font-semibold text-gray-900 line-clamp-2 min-h-[3rem]">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">
                R$ {product.price.toFixed(2)}
              </span>
            </div>
          </div>
        </Link>
        <div className="px-4 pb-4">
          <button
            onClick={handleAddToCart}
            className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="text-center pt-4">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gray-900">Adicionado ao Carrinho</h3>
          <p className="text-base text-gray-600 mb-6">
            "{product.name}" foi adicionado ao seu carrinho.
          </p>
          <div className="flex gap-3">
            <button
              onClick={closeModal}
              className="flex-1 px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Continuar Comprando
            </button>
            <Link
              to="/cart"
              className="flex-1 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center"
            >
              Ir para o Carrinho
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductCard;