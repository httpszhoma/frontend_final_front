import React from 'react';
import logo from '../assets/logo2.png';

const Footer = () => (
  <footer className="bg-[#22333B] py-8 text-white">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
      {/* Logo Section */}
      <div className="mb-4 md:mb-0">
        <img src={logo} alt="Tick & Lens Logo" className="h-16" />
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-6 mb-4 md:mb-0">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <i className="fab fa-tiktok text-2xl"></i>
        </a>
      </div>

      {/* Contact Info */}
      <div className="text-center md:text-left">
        <p className="hover:text-gray-400">
          8 (775) 946 70 52
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
