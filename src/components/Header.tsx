// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  const { cart } = useCart();
  const { isLoggedIn, logout } = useAuth();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-[var(--color-text)] text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-[var(--color-primary)] hover:text-blue-300 transition"
        >
          TechShop
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">
            Produtos
          </Link>
          <Link to="/cart" className="relative hover:text-[var(--color-primary)] transition-colors">
            <FaShoppingCart className="text-xl" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-[var(--color-accent)] text-xs text-white px-2 py-0.5 rounded-full shadow">
                {totalItems}
              </span>
            )}
          </Link>
          {isLoggedIn ? (
            <button
              onClick={logout}
              className="bg-[var(--color-accent)] px-4 py-2 rounded-lg hover:opacity-90 transition font-medium shadow"
            >
              Sair
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-[var(--color-primary)] px-4 py-2 rounded-lg hover:opacity-90 transition font-medium shadow"
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