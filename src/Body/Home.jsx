import React, { useContext, useEffect, useState } from 'react';
import countryImage from '../img/logo.png'; // Rasmga yo‘lni qo‘shing
import axios from 'axios';
import { SearchContext } from '../Context/SearchContext';
import $ from 'jquery'
import { ScrollContext } from '../Context/ScrollContext';
const Welcome = () => {
  const [Value, SetValue] = useState('');
  const { getData2, SetgetData2 } = useContext(SearchContext);
  const [Data, SetData] = useState([]);

  const handelSearch = (value) => {
    SetValue(value);
    setTimeout(() => {
      Search();
    }, 400);

    if (value.length >= 2) {
      SetgetData2(Data);
    } else {
      SetgetData2([]);
    }
  };

  const Search = () => {
    setTimeout( async()=>{
      try {
        const getData = await axios.get('https://restcountries.com/v3.1/name/' + Value);
        SetData(getData.data);
      } catch (error) {
        console.log(error);
      }
    },100)
   
  };

let [drop,setdrop] = useState(false)

useEffect(()=>{

  $('.clickDrop').on('click',()=>{
    $('.viewDrop').toggle('fast')

   
  })

},[])
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
let [scrolll,SetScroll] = useState(0)
let handelScroll = ()=>{
  SetScroll(window.scrollY)
}
useEffect(()=>{
window.addEventListener('scroll',handelScroll)

return ()=>{ window.removeEventListener('scroll',handelScroll)}

},[])

  return (
    <div className="flex ml-[10px] mr-[10px] relative items-center justify-center h-[100px] p-10 rounded-lg">
      
      <div className={`w-full pl-[10px] bg-white  pr-[25px] ${scrolll > 400 ? `top-[5px] shadow-lg fixed xl:w-[1200px]  z-40 bg-white ` : `absolute bottom-[60px]`} search___box flex items-center h-[55px] rounded-2xl border  border-blue-600 `}>
        <div className='relative h-full flex items-center justify-center'>

       <div onClick={()=>{!drop ? setdrop(true) : setdrop(false)}} className=' text-blue-600 font-bold clickDrop cursor-pointer flex items-center justify-between px-[5px] w-[150px] h-[70%] rounded-lg border bg-white'>
Region {!drop ? <i className="ri-arrow-down-s-line"></i> : <i className="ri-arrow-up-s-line"></i>}
       </div>

<div className='viewDrop hidden absolute h-[200px] w-[150px] shadow-lg bottom-[-196px] z-30 rounded-xl bg-white'>
<div className='w-full h-full flex scrollbar-custom   overflow-auto  flex-col'>
<p onClick={()=>ScrollAsia()} className='font-sans text-blue-700 p-[10px] cursor-pointer hover:bg-blue-100 rounded-lg transition-all  w-full'>
  Asia
</p>
<p onClick={()=>ScrollAfrica()} className='font-sans text-blue-700 p-[10px] cursor-pointer hover:bg-blue-100 rounded-lg transition-all  w-full'>
  Africa
</p>
<p onClick={()=>ScrollAmericas()} className='font-sans text-blue-700 p-[10px] cursor-pointer hover:bg-blue-100 rounded-lg transition-all  w-full'>
Americas
</p>
<p onClick={()=>ScrollEurope()} className='font-sans text-blue-700 p-[10px] cursor-pointer hover:bg-blue-100 rounded-lg transition-all  w-full'>
Europe
</p>
<p onClick={()=>ScrollOceania()} className='font-sans text-blue-700 p-[10px] cursor-pointer hover:bg-blue-100 rounded-lg transition-all  w-full'>
Oceania
</p>

<p onClick={()=>ScrollAntarctic()} className='font-sans text-blue-700 p-[10px] cursor-pointer hover:bg-blue-100 rounded-lg transition-all  w-full'>
Antarctic
</p>



</div>
</div>


        </div>

        <form onSubmit={(e) => {
          e.preventDefault();
          Search();
        }} className='w-full border-l-3'>
          <input
            onInput={(e) => handelSearch(e.target.value)}
            type="text"
            className='w-full focus:outline-none focus:ring-0 h-full bg-transparent border-none'
            placeholder='Country name...'
            name='search'
          />
        </form>
        <button className='font-bold text-[22px] text-blue-700'>
          <i className="ri-search-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
