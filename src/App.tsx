import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';


function App(){
  return (
    <nav className='bg-gray-900 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center'>
            <Link to="" className='text-white text-2xl font-bold'>Shopify!</Link>
          </div>
          {/* Navigation Links */}
          <div className='flex items-center'>
            <div className='hidden md:block'>
              <Link to="" className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Home</Link>
              <Link to="/shop" className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Shop</Link>
              <Link to="/about" className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>About</Link>
              <Link to="/contact" className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Contact</Link>

            </div>
            {/* Mobile Menu Button */}
            <div className='md:hidden'>
              <button type='button' className='text-gray-300 hover:text-white focus:outline-none focus:text-white'>
                <svg className='h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default App;
