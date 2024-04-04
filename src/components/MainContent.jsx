import React, { useContext } from 'react'
import { Routes , Route } from "react-router-dom";
import "../css/MainContent.css"
import Characters from './MainContent components/Characters';
import Contact from './MainContent components/Contact';
import Home from './MainContent components/Home';
import { context } from '../context/context';
import Locations from './MainContent components/Locations';
import Episodes from './MainContent components/Episodes';

function MainContent() {
  let {urlRouter}=useContext(context)

  return (
    <main className='Main'>
      <Routes>
        <Route path={urlRouter.home} element={ <Home/>}/>
        <Route path={urlRouter.characters} element={ <Characters/>}/>
        <Route path={urlRouter.locations} element={ <Locations/>}/>
        <Route path={urlRouter.contact} element={<Contact/>} />
        <Route path={urlRouter.episodes} element={<Episodes/>} />
      </Routes>
    </main>
  )
}

export default MainContent