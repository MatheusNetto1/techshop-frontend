// src/pages/ProductDetailPage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Produto não encontrado</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Voltar para Produtos
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-xl border border-gray-200 p-6 lg:p-8 shadow-sm">
          <div className="flex justify-center items-start">
            <div className="w-full aspect-square overflow-hidden rounded-xl bg-gray-100">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  R$ {product.price.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Descrição</h2>
              <p className="text-base text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <ShoppingCart className="w-5 h-5" />
                Adicionar ao Carrinho
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <span className="text-emerald-600">✓</span> Entrega rápida
              </p>
              <p className="flex items-center gap-2">
                <span className="text-emerald-600">✓</span> Garantia de 1 ano
              </p>
              <p className="flex items-center gap-2">
                <span className="text-emerald-600">✓</span> Devolução grátis em 30 dias
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;