// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} TechShop. Todos os direitos reservados.
        </p>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-blue-400 transition">Política de Privacidade</a>
          <a href="#" className="hover:text-blue-400 transition">Termos de Uso</a>
          <a href="#" className="hover:text-blue-400 transition">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;