// src/components/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext'; // Importe o hook de autenticação

const Header: React.FC = () => {
  const { cart } = useCart();
  const { isLoggedIn, logout } = useAuth(); // Use o estado e a função de logout
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          TechShop
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link to="/" className="hover:text-gray-300 transition-colors">
                Produtos
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gray-300 transition-colors relative">
                Carrinho ({totalItems})
              </Link>
            </li>
            {isLoggedIn ? (
              <li>
                <button
                  onClick={logout}
                  className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition-colors"
                >
                  Sair
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition-colors">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;