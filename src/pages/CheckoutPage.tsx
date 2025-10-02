// src/pages/CheckoutPage.tsx

import React from 'react';

const CheckoutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-4xl font-bold mb-8 text-center">Finalizar Compra</h1>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nome Completo</label>
          <input type="text" id="name" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Endereço de Entrega</label>
          <input type="text" id="address" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="card" className="block text-gray-700 font-semibold mb-2">Número do Cartão (Simulado)</label>
          <input type="text" id="card" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-md text-lg hover:bg-green-600 transition-colors">
          Confirmar Pedido
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;