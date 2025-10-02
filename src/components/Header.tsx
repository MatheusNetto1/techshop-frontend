// src/components/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Título da Loja e Link para a Home */}
        <Link to="/" className="text-2xl font-bold">
          TechShop
        </Link>
        
        {/* Links de Navegação */}
        <nav>
          <ul className="flex space-x-4">
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;