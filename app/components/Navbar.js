import React from "react";

const Navbar = () => {
  return (
    <nav className='bg-white-500 p-2 px-10 w-screen flex items-center border-b border-gray-200'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center gap-5'>
          <img
            src='/images/whatBytesLogo.jpeg'
            alt='Profile Photo'
            className='w-10 h-10 rounded-full'
          />
          <div className='text-black font-bold text-3xl'>WhatBytes</div>
        </div>

        <div className='flex items-center space-x-4 p-1 bg-white rounded-lg shadow-md border border-gray-300'>
          <h1 className='p-1 bg-blue-400 rounded-full text-white text-center sm:p-2 sm:text-sm md:p-3 md:text-md'>
            SB
          </h1>

          <span className='text-black font-bold text-sm'>Sahil</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

