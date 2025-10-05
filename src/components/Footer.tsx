// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} TechShop. Todos os direitos reservados.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;