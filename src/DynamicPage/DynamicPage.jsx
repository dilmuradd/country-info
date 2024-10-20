import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CategoryLoader from '../Body/Loading/CategoryLoader';

const DynamicPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCountryData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
      setData(response.data[0]);
      setLoading(false);
    } catch (error) {
      setError('Failed to load country data');
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountryData();
  }, [id]);

  if (loading) return <div className='flex items-center justify-center h-[60vh]'><CategoryLoader/></div>;
  if (error) return (
    <div className='h-[80vh] flex items-center justify-center p-[20px] flex-col'>
      <img className='w-[700px] mb-[30px] ml-[20px] mr-[20px]' src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" alt="" />
      <p className="text-center font-bold text-[32px] text-red-500">{error}</p>
      <button onClick={()=>navigate(-1)} className='w-[200px] mt-5 bg-blue-600 text-white h-[40px] rounded-md'>
        <i className="ri-arrow-left-s-line"></i> Home
      </button>
    </div>
  );

  return (
    <div className="flex justify-center p-[10px] items-center mt-[100px] mb-[100px] bg-gradient-to-r">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/3">
          <img
            src={data.flags.svg}
            alt={`${data.name.common} flag`}
            className="w-full h-auto object-cover rounded-lg border-4 border-blue-200 shadow-md mb-4"
          />
        </div>
        <div className="mt-6 md:mt-0 md:ml-8 flex-1">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-4 border-b-2 border-blue-300 pb-2 text-center md:text-left">
            {data.name.common}
          </h1>
          <button 
            className="flex items-center text-red-600 mb-4 hover:text-blue-800 transition duration-200" 
            onClick={() => navigate(-1)}
          >
            <i className="ri-arrow-left-line mr-2"></i> Go Back
          </button>

          {/* Div orqali tayyorlangan ma'lumotlar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <p className="font-bold">Capital:</p>
              <p>{data.capital}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <p className="font-bold">Region:</p>
              <p>{data.region}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <p className="font-bold">Subregion:</p>
              <p>{data.subregion}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <p className="font-bold">Population:</p>
              <p>{data.population.toLocaleString()}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <p className="font-bold">Languages:</p>
              <p>{Object.values(data.languages).join(', ')}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <p className="font-bold">Currencies:</p>
              <p>{Object.values(data.currencies).map(c => c.name).join(', ')}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <p className="font-bold">Area:</p>
              <p>{data.area.toLocaleString()} km²</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <p className="font-bold">Timezones:</p>
              <p>{data.timezones.join(', ')}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <p className="font-bold">Demonym:</p>
              <p>{data.demonym}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
  <p className="font-bold">Demonym:</p>
  <p>{data.demonym || 'No data'}</p> {/* Muqobil ko'rsatish */}
</div>
<div className="bg-gray-100 p-4 rounded-lg shadow-lg">
  <p className="font-bold">Driving Side:</p>
  <p>{data.car?.drivingSide || 'No data'}</p> {/* Muqobil ko'rsatish */}
</div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <p className="font-bold">Calling Code:</p>
              <p>{data.idd?.root} {data.idd?.suffixes.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;
