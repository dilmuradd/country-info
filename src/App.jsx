import { useState } from 'react'
import Body from './Body/Body'
import Header from './Body/Header/Header'
import Welcome from './Body/Home'
import Footer from './Body/Footer/Footer'
import Home from './Body/Welcome'
import { Route, Routes } from 'react-router-dom'
import DynamicPage from './DynamicPage/DynamicPage'
import Page404 from './NotFoundPage/Page404'

function App() {

  return (
   <div className='max-w-[1200px] m-auto '>
    <Header/>
<Routes>
  <Route path='/' element={<Body/>}/>
  <Route path='/:id' element={<DynamicPage/>}/>
  <Route path='*' element={<Page404/>}/>
  </Routes> 


    

    <Footer/>
   </div>
  )
}

export default App
