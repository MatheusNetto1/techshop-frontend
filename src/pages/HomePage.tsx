// src/pages/HomePage.tsx
import React, { useState } from 'react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => (
      <button
        key={number}
        onClick={() => paginate(number)}
        className={`px-4 py-2 mx-1 rounded-lg transition-all duration-200 text-sm font-medium
          ${
            currentPage === number
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
      >
        {number}
      </button>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-gray-900">
          Nossos Produtos
        </h1>

        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200 placeholder:text-gray-400"
            />
          </div>
        </div>

        {filteredProducts.length > 0 && (
          <p className="text-sm text-gray-600 mb-6">
            Mostrando {indexOfFirstProduct + 1}-
            {Math.min(indexOfLastProduct, filteredProducts.length)} de {filteredProducts.length}{' '}
            produtos
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500">Nenhum produto encontrado.</p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-6 py-2 rounded-lg border border-gray-300 bg-white text-gray-700
                         font-medium disabled:opacity-50 disabled:cursor-not-allowed
                         hover:bg-gray-50 transition-all duration-200"
            >
              Anterior
            </button>
            <div className="hidden sm:flex">{renderPageNumbers()}</div>
            <div className="sm:hidden px-4 py-2 text-sm text-gray-600">
              Página {currentPage} de {totalPages}
            </div>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-6 py-2 rounded-lg border border-gray-300 bg-white text-gray-700
                         font-medium disabled:opacity-50 disabled:cursor-not-allowed
                         hover:bg-gray-50 transition-all duration-200"
            >
              Próxima
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;