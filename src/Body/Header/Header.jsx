import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import ReactDOM  from 'react-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import $ from 'jquery';

const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    if (isMenuOpen) {
      $('.menu').slideDown(300);
    } else {
      $('.menu').slideUp(300);
    }
  }, [isMenuOpen]);




  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [openAbout, setOpenAbout] = useState(false);

  const onOpenModalAbout = () => setOpenAbout(true);
  const onCloseModalAbout = () => setOpenAbout(false);

  
  return (
    <div>

    <header className="rounded-bl-3xl rounded-br-3xl bg-white">
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <div>
          <Link to={'/'}>
            <img className="w-10 h-10" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Burger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-600 text-2xl focus:outline-none"
            >
            <i className={`ri-menu-line ${isMenuOpen ? 'hidden' : 'block'}`}></i>
            <i className={`ri-close-line ${isMenuOpen ? 'block' : 'hidden'}`}></i>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className={`hidden md:flex items-center gap-8 justify-center w-full`}>
          <Link
            to={'/'}
            className="text-blue-600 text-sm md:text-lg lg:text-xl font-semibold hover:text-blue-400 transition duration-300"
            >
            Home <i className="ri-home-line"></i>
          </Link>

          <p
            onClick={onOpenModal}
            className="text-blue-600 cursor-pointer text-sm md:text-lg lg:text-xl font-semibold hover:text-blue-400 transition duration-300"
            >
            About <i className="ri-information-line"></i>
          </p>

          <p
            onClick={onOpenModalAbout}
            className="text-blue-600 cursor-pointer text-sm md:text-lg lg:text-xl font-semibold hover:text-blue-400 transition duration-300"
            >
            Contact <i className="ri-customer-service-2-line"></i>
          </p>

          <a href='https://github.com/dilmuradd' target='_blank'>
            <button className='text-[26px] text-blue-900'>
              <i className="ri-github-fill"></i>
            </button>
          </a>
        </div>
      </div>

      {/* Links for Mobile */}
      <div className={`menu bg-white md:hidden`}>
        <Link
          to={'/'}
          className="block text-blue-600 text-lg font-semibold hover:text-blue-400 transition duration-300 p-4"
          >
          Home <i className="ri-home-line"></i>
        </Link>

        <Link
        
          to={'/about'}
          className="block text-blue-600 text-lg font-semibold hover:text-blue-400 transition duration-300 p-4"
          >
          About <i className="ri-information-line"></i>
        </Link>

        <Link
          to={'/contact'}
          className="block text-blue-600 text-lg font-semibold hover:text-blue-400 transition duration-300 p-4"
          >
          Contact <i className="ri-customer-service-2-line"></i>
        </Link>
      </div>









    </header>

    <Modal open={open} onClose={onCloseModal} center classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}>
      <div className=" rounded-lg">
  <h2 className="text-2xl font-bold mb-4">Website Information</h2>
  
  <div className="mb-4">
    <h3 className="text-xl font-semibold">Creator:</h3>
    <p className="text-gray-700">Dilmurod</p>
  </div>

  <div className="mb-4">
    <h3 className="text-xl font-semibold">Website Purpose:</h3>
    <p className="text-gray-700">This website provides valuable information about various countries, including their cultures, languages, and traditions. It aims to help users understand and appreciate the diversity of our world.</p>
  </div>

  <p className="mt-4 text-gray-500">
    Our goal is to create an informative platform where users can explore different countries, their histories, and unique characteristics. We believe that understanding different cultures fosters respect and harmony among people worldwide.
  </p>
</div>

      </Modal>



      <Modal open={openAbout} onClose={onCloseModalAbout} center classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}>
       <div className="rounded-lg p-4">
    <h2 className="text-2xl font-bold mb-4">Contact</h2>
    
    <div className="mb-4">
      <h3 className="text-xl font-semibold">Telegram:</h3>
      <p className="text-gray-700">@dilmurod_dev</p>
    </div>

    <div className="mb-4">
      <h3 className="text-xl font-semibold">Instagram:</h3>
      <p className="text-gray-700">@dilmurad_dd</p>
    </div>

    <div className="mb-4">
      <h3 className="text-xl font-semibold">Email:</h3>
      <p className="text-gray-700">dilmurodmt23@gmail.com</p>
    </div>

    <p className="mt-4 text-gray-500">
      If you have any questions or feedback, feel free to reach out to us using the contact details above. We are here to assist you.
    </p>
  </div>

      </Modal>


          </div>
  );
};

export default Header;
