// src/pages/OrderConfirmationPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Home } from 'lucide-react';

const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 lg:p-12">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <CheckCircle className="w-16 h-16 text-emerald-600" />
          </div>

          <h1 className="text-4xl font-bold text-emerald-600 mb-4">Pedido Confirmado</h1>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Obrigado por sua compra no <span className="font-semibold text-blue-600">TechShop</span>.
            <br />
            Seu pedido foi processado com sucesso e em breve será enviado.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 space-y-3">
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <Package className="w-5 h-5 text-blue-600" />
              <p className="text-sm">
                Você receberá um e-mail com os detalhes do pedido e código de rastreamento.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Home className="w-5 h-5" />
              Voltar para Home
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200"
            >
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;