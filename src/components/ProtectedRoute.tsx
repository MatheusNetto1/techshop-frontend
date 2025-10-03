// src/components/ProtectedRoute.tsx

import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    // Se o usuário não estiver logado, redireciona para a página de login
    return <Navigate to="/login" />;
  }

  // Se o usuário estiver logado, renderiza a rota filha
  return <Outlet />;
};

export default ProtectedRoute;