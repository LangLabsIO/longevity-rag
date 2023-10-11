import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-semibold">Vroom Vroom Club</h2>
        <p className="mt-2 mb-4">Explore the world of automobiles with us!</p>
        <div className="flex space-x-4">
          <a href="#" className="text-xl hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="#" className="text-xl hover:text-blue-500">
            <FaTwitter />
          </a>
          <a href="#" className="text-xl hover:text-red-500">
            <FaInstagram />
          </a>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Vroom Vroom Club</p>
      </div>
    </footer>
  );
};

export default Footer;
