import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-[60px] text-gray-200 p-6">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto">
        <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-0">
          Created by dilmuradd
        </h3>
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/dilmuradd"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110"
          >
            <i className="ri-github-fill text-3xl hover:text-gray-400"></i>
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
