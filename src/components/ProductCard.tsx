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
    <div className="border border-gray-200 p-4 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transform transition duration-300 bg-[var(--color-card-bg)]">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover mb-4 rounded-md transition-transform duration-300 hover:scale-105"
        />
        <h2 className="text-lg font-semibold text-[var(--color-text)]">{product.name}</h2>
        <p className="text-[var(--color-subtle)] font-medium">${product.price.toFixed(2)}</p>
      </Link>
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-[var(--color-primary)] text-white py-2 rounded-lg hover:bg-[var(--color-secondary)] transition"
      >
        Adicionar ao Carrinho
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2 text-green-600">Adicionado ao Carrinho!</h3>
          <p className="text-lg text-gray-700">"{product.name}" foi adicionado ao seu carrinho.</p>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={closeModal}
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition"
            >
              Continuar Comprando
            </button>
            <Link
              to="/cart"
              className="bg-[var(--color-primary)] text-white py-2 px-4 rounded-md hover:bg-[var(--color-secondary)] transition"
            >
              Ir para o Carrinho
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;