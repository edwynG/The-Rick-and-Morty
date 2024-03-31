import React from 'react'
import { Routes , Route } from "react-router-dom";
import "../css/MainContent.css"
import Characters from './MainContent components/Characters';
import Contact from './MainContent components/Contact';
import Home from './MainContent components/Home';

function MainContent() {
  return (
    <main>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/Characters' element={ <Characters/>}/>
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </main>
  )
}

export default MainContent