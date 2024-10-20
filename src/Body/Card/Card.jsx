import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { SearchContext } from '../../Context/SearchContext';
import { ScrollContext } from '../../Context/ScrollContext';
import { useNavigate } from 'react-router-dom';
import YoutubeMagic from '../Loading/YoutubeMagic';

const Card = () => {
  const [countries, setCountries] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

let Asia = countries.filter(Asia=>Asia.region === "Asia")
let Africa = countries.filter(Africa=>Africa.region === "Africa")
let Americas = countries.filter(Americas=>Americas.region === "Americas")
let Europe = countries.filter(Europe=>Europe.region === "Europe")
let Oceania = countries.filter(Oceania=>Oceania.region === "Oceania")
let Antarctic = countries.filter(Antarctic=>Antarctic.region === "Antarctic")
let {getData2} = useContext(SearchContext)
let {
        AsiaS,
        ScrollAsia,
        AfricaS,
        ScrollAfrica,
        AmericasS,
        ScrollAmericas,
        EuropeS,
        ScrollEurope,
        OceaniaS,
        ScrollOceania,
        AntarcticS,
        ScrollAntarctic

} = useContext(ScrollContext)

let PageInfo = useNavigate()
if(countries.length === 0) return <div className='flex items-center justify-center'><YoutubeMagic/></div>
 
  return (
    <div>

{
  getData2.length === 0 && []
  ?
  <div>
         <h1 ref={AsiaS} className="text-3xl flex items-center gap-3 font-extrabold text-blue-700 mb-4 ml-4  p-2 rounded-md transition duration-300 ">
  Asia
  <span className='text-[18px] font-serif  flex items-center justify-center  h-[30px] w-[60px]'>
    ( {Asia.length} )
  </span>
</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Asia.map((country) => (
        <div
        onClick={()=>PageInfo(`/${country.cca2}`)}
        key={country.cca2}
        data-aos="zoom-in-up"
        className="flex flex-col cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
        >
          <img
            className="w-full h-32 border object-cover"
            src={country.flags.png}
            alt={country.name.common}
            />
          <div className="p-4 flex-grow">
            <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
            <p className="text-gray-600">Code: {country.cca2}</p>
          </div>
        </div>
      ))}
    </div>


<div>
<h1 ref={AfricaS} className="text-3xl flex items-center gap-3 font-extrabold text-blue-700 mb-4 ml-4  p-2 rounded-md transition duration-300 ">
Africa
  <span className='text-[18px] font-serif  flex items-center justify-center  h-[30px] w-[60px]'>
    ( {Africa.length} )
  </span>
</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Africa.map((country) => (
        <div
        onClick={()=>PageInfo(`/${country.cca2}`)}
        key={country.cca2}
        data-aos="zoom-in-up"
        className="flex flex-col cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
        >
          <img
            className="w-full h-32 border object-cover"
            src={country.flags.png}
            alt={country.name.common}
            />
          <div className="p-4 flex-grow">
            <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
            <p className="text-gray-600">Code: {country.cca2}</p>
          </div>
        </div>
      ))}
    </div>

</div>


<div>
<h1 ref={AmericasS} className="text-3xl flex items-center gap-3 font-extrabold text-blue-700 mb-4 ml-4  p-2 rounded-md transition duration-300 ">
Americas
  <span className='text-[18px] font-serif  flex items-center justify-center  h-[30px] w-[60px]'>
    ( {Americas.length} )
  </span>
</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Americas.map((country) => (
        <div
        onClick={()=>PageInfo(`/${country.cca2}`)}
        key={country.cca2}
        data-aos="zoom-in-up"
        className="flex flex-col cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
        >
          <img
            className="w-full h-32 border object-cover"
            src={country.flags.png}
            alt={country.name.common}
            />
          <div className="p-4 flex-grow">
            <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
            <p className="text-gray-600">Code: {country.cca2}</p>
          </div>
        </div>
      ))}
    </div>

</div>

<div>
<h1 ref={EuropeS} className="text-3xl flex items-center gap-3 font-extrabold text-blue-700 mb-4 ml-4  p-2 rounded-md transition duration-300 ">
Europe
  <span className='text-[18px] font-serif  flex items-center justify-center  h-[30px] w-[60px]'>
    ( {Europe.length} )
  </span>
</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Europe.map((country) => (
        <div
        onClick={()=>PageInfo(`/${country.cca2}`)}
        key={country.cca2}
        data-aos="zoom-in-up"
        className="flex flex-col cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
        >
          <img
            className="w-full h-32 border object-cover"
            src={country.flags.png}
            alt={country.name.common}
            />
          <div className="p-4 flex-grow">
            <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
            <p className="text-gray-600">Code: {country.cca2}</p>
          </div>
        </div>
      ))}
    </div>

</div>


<div>
<h1 ref={OceaniaS} className="text-3xl flex items-center gap-3 font-extrabold text-blue-700 mb-4 ml-4  p-2 rounded-md transition duration-300 ">
Oceania
  <span className='text-[18px] font-serif  flex items-center justify-center  h-[30px] w-[60px]'>
    ( {Oceania.length} )
  </span>
</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Oceania.map((country) => (
        <div
        onClick={()=>PageInfo(`/${country.cca2}`)}
        key={country.cca2}
        data-aos="zoom-in-up"
        className="flex flex-col cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
        >
          <img
            className="w-full h-32 border object-cover"
            src={country.flags.png}
            alt={country.name.common}
            />
          <div className="p-4 flex-grow">
            <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
            <p className="text-gray-600">Code: {country.cca2}</p>
          </div>
        </div>
      ))}
    </div>

</div>

<div>
<h1 ref={AntarcticS} className="text-3xl flex items-center gap-3 font-extrabold text-blue-700 mb-4 ml-4  p-2 rounded-md transition duration-300 ">
Antarctic
  <span className='text-[18px] font-serif  flex items-center justify-center  h-[30px] w-[60px]'>
    ( {Antarctic.length} )
  </span>
</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Antarctic.map((country) => (
        <div
        onClick={()=>PageInfo(`/${country.cca2}`)}
        key={country.cca2}
        data-aos="zoom-in-up"
        className="flex flex-col cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
        >
          <img
            className="w-full h-32 border object-cover"
            src={country.flags.png}
            alt={country.name.common}
            />
          <div className="p-4 flex-grow">
            <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
            <p className="text-gray-600">Code: {country.cca2}</p>
          </div>
        </div>
      ))}
    </div>

</div>


      </div>
      : <div>
        <h1 className="text-3xl flex items-center gap-3 font-extrabold text-blue-700 mb-4 ml-4  p-2 rounded-md transition duration-300 ">
Search Result
  <span className='text-[18px] font-serif  flex items-center justify-center  h-[30px] w-[60px]'>
    ( {getData2.length} )
  </span>
</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {getData2.map((country) => (
        <div
        onClick={()=>PageInfo(`/${country.cca2}`)}
        key={country.cca2}
        data-aos="zoom-in-up"
        className="flex flex-col cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
        >
          <img
            className="w-full h-32 border object-cover"
            src={country.flags.png}
            alt={country.name.common}
            />
          <div className="p-4 flex-grow">
            <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
            <p className="text-gray-600">Code: {country.cca2}</p>
          </div>
        </div>
      ))}
    </div>


      </div>
}

  </div>
  );
};

export default Card;
