// src/context/AuthContext.tsx

import React, { createContext, useState, useContext, type ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = () => {
    // Lógica de login simulada
    setIsLoggedIn(true);
    console.log('Usuário logado!');
  };

  const logout = () => {
    // Lógica de logout simulada
    setIsLoggedIn(false);
    console.log('Usuário deslogado!');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};