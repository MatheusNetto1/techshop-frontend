// src/pages/HomePage.tsx
import React, { useState } from 'react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import { FiSearch } from 'react-icons/fi';

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
    return pageNumbers.map(number => (
      <button
        key={number}
        onClick={() => paginate(number)}
        className={`px-3 py-1 mx-1 rounded-full transition-all duration-300 text-sm font-medium
          ${currentPage === number
            ? 'bg-primary text-white shadow-md'
            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
          }`}
      >
        {number}
      </button>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-text tracking-wide underline decoration-primary/30">
          Nossos Produtos
        </h1>

        <div className="mb-10 flex justify-center">
          <div className="relative w-full max-w-lg">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
                         transition-all duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div
                key={product.id}
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Nenhum produto encontrado.
            </p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center space-x-2">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 disabled:opacity-50 hover:bg-gray-100 transition-all duration-300"
            >
              Anterior
            </button>
            {renderPageNumbers()}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 disabled:opacity-50 hover:bg-gray-100 transition-all duration-300"
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