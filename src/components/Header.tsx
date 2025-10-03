// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa'; // Importe o ícone do carrinho

const Header: React.FC = () => {
  const { cart } = useCart();
  const { isLoggedIn, logout } = useAuth();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-blue-400 hover:text-blue-300 transition"
        >
          TechShop
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:text-blue-400 transition-colors">
            Produtos
          </Link>
          <Link to="/cart" className="relative hover:text-blue-400 transition-colors">
            <FaShoppingCart className="text-xl" /> {/* Use o ícone do carrinho */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs text-white px-2 py-0.5 rounded-full shadow">
                {totalItems}
              </span>
            )}
          </Link>
          {isLoggedIn ? (
            <button
              onClick={logout}
              className="bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 rounded-lg hover:opacity-90 transition font-medium shadow"
            >
              Sair
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 rounded-lg hover:opacity-90 transition font-medium shadow"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;