// src/pages/CartPage.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 15.0 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Seu Carrinho</h1>

        {cart.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-500 mb-6">Seu carrinho está vazio.</p>
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Continuar Comprando
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1 space-y-2">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-lg font-bold text-gray-900">
                      R$ {item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 border border-gray-200 rounded-lg">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors duration-200"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="font-medium text-gray-900 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Remover</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-4 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900">Resumo</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium">R$ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Frete</span>
                    <span className="font-medium">R$ {shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3">
                    <div className="flex justify-between text-xl font-bold text-gray-900">
                      <span>Total</span>
                      <span className="text-blue-600">R$ {total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="block w-full py-4 bg-blue-600 text-white font-medium text-center rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Finalizar Compra
                </Link>
                <Link
                  to="/"
                  className="block w-full py-3 text-center text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
                >
                  Continuar Comprando
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;