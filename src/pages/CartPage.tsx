// src/pages/CartPage.tsx

import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Seu Carrinho</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  
                  {/* Controles de quantidade */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="bg-gray-300 px-2 py-1 rounded-l-md hover:bg-gray-400 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="bg-gray-300 px-2 py-1 rounded-r-md hover:bg-gray-400 transition-colors"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-500 hover:text-red-700 transition-colors"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-8 flex justify-between items-center text-2xl font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="mt-8 text-center">
            <Link to="/checkout" className="bg-green-500 text-white py-3 px-8 rounded-md text-lg hover:bg-green-600 transition-colors">
              Finalizar Compra
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;