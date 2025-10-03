// src/pages/LoginPage.tsx

import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Em um projeto real, você faria uma chamada à API para autenticar o usuário
    login();
    navigate('/'); // Redireciona para a página inicial após o login
  };

  return (
    <div className="container mx-auto p-4 max-w-sm flex-grow">
      <h1 className="text-4xl font-bold mb-8 text-center">Login</h1>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;