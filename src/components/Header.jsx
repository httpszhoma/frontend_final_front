import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => (
  <header className="w-full bg-white shadow-md">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      {/* Logo Section */}
      <div>
        <NavLink to="/">
          <img src={logo} alt="Tick & Lens Logo" className="h-16" />
        </NavLink>
      </div>

      {/* Navigation Section */}
      <nav>
        <ul className="flex space-x-8 text-[#22333B] font-semibold text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-800 underline decoration-2 underline-offset-4'
                  : 'hover:text-gray-500'
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/watch"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#22333B] underline decoration-2 underline-offset-4'
                  : 'hover:text-gray-500'
              }
            >
              WATCH
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/glasses"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#22333B] underline decoration-2 underline-offset-4'
                  : 'hover:text-gray-500'
              }
            >
              GLASSES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jewelry"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#22333B] underline decoration-2 underline-offset-4'
                  : 'hover:text-gray-500'
              }
            >
              JEWELRY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#22333B] underline decoration-2 underline-offset-4'
                  : 'hover:text-gray-500'
              }
            >
              CONTACTS
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Icons Section */}
      <div className="flex items-center space-x-6 text-gray-600">
        <button aria-label="Search" className="hover:text-gray-800">
          <i className="fa fa-search text-xl"></i>
        </button>
        <button aria-label="Shopping Cart" className="hover:text-gray-800">
          <i className="fa fa-shopping-cart text-xl"></i>
        </button>
        <button aria-label="User Account" className="hover:text-gray-800">
          <i className="fa fa-user text-xl"></i>
        </button>
      </div>
    </div>
  </header>
);

export default Header;
