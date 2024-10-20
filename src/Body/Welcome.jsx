import React from 'react';
import countryImage from '../img/logo.png'; // Rasmga yo'lni o'zgartiring

const Home = () => {
  return (
    <div>

    <div className='h-[350px] pt-[50px]'>
   <h1 className='text-center font-bold text-[42px] text-blue-600 '>
   Country Info
   </h1>
   <div className='flex items-center justify-center'>

<p className='text-center w-[600px] mt-[20px] text-blue-600 font-mono'>
Country Info" - Discover key details about countries worldwide: capitals, population, official languages, and economic indicators in a concise format.
</p>


   </div>
   <div className='flex text-[22px] mt-[15px] text-blue-800 items-center justify-center gap-5'>
<i className="ri-github-fill cursor-pointer"></i>
<i className="ri-instagram-fill cursor-pointer"></i>
<i className="ri-telegram-fill cursor-pointer"></i>
</div>
    </div>
    </div>
  );
};

export default Home;
