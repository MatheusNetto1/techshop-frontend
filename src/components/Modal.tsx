// src/components/Modal.tsx

import React, { type ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative p-8 w-full max-w-md mx-auto bg-white rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;