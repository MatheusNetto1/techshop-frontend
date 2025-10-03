// src/pages/OrderConfirmationPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Pedido Confirmado!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Obrigado por sua compra no TechShop. Seu pedido foi processado com sucesso.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white py-3 px-8 rounded-md text-lg hover:bg-blue-600 transition-colors"
      >
        Continuar Comprando
      </Link>
    </div>
  );
};

export default OrderConfirmationPage;