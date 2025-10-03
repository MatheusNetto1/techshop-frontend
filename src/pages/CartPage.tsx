// src/pages/CartPage.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4 md:p-8 min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-8 text-center">Seu Carrinho</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between border-b py-6 last:border-b-0"
            >
              <div className="flex items-center mb-4 md:mb-0">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded-l-md hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded-r-md hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8 flex justify-between items-center text-2xl font-bold border-t pt-6">
            <span>Total:</span>
            <span className="text-accent">${total.toFixed(2)}</span>
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/checkout"
              className="bg-green-500 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-green-600 transition"
            >
              Finalizar Compra
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;