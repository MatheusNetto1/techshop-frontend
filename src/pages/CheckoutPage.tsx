// src/pages/CheckoutPage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o hook de navegação
import { useCart } from '../context/CartContext';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart(); // Use o hook para o carrinho

  // Função para simular o envio do pedido
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Lógica para processar o pedido (simulado)
    console.log('Finalizando compra com os seguintes itens:', cart);
    
    // Limpar o carrinho após a compra
    cart.forEach(item => removeFromCart(item.id));
    
    // Redirecionar para a página de confirmação
    navigate('/order-confirmation');
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-4xl font-bold mb-8 text-center">Finalizar Compra</h1>
      <form onSubmit={handleCheckout} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nome Completo</label>
          <input type="text" id="name" className="w-full px-4 py-2 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Endereço de Entrega</label>
          <input type="text" id="address" className="w-full px-4 py-2 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="card" className="block text-gray-700 font-semibold mb-2">Número do Cartão (Simulado)</label>
          <input type="text" id="card" className="w-full px-4 py-2 border rounded-md" required />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-md text-lg hover:bg-green-600 transition-colors">
          Confirmar Pedido
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;