// src/pages/HomePage.tsx

import React, { useState } from 'react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';

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
        className={`px-3 py-1 mx-1 border rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
      >
        {number}
      </button>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Nossos Produtos</h1>
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">Nenhum produto encontrado.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 mx-1 border rounded-md bg-white text-gray-700 disabled:opacity-50"
          >
            Anterior
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 mx-1 border rounded-md bg-white text-gray-700 disabled:opacity-50"
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;