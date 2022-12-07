import './App.css';
import React from 'react';
import Navbar from './component/navbar/Navbar';
import {Routes, Route } from "react-router-dom";
import All from './pages/all/All';
import Area from './pages/city/Area';
function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <div className='Mitt1234'>
        <Routes>

          <Route path='/search_by_city' element={<Area/>}/>
          <Route path='/search_by_All' element={<All/>}/>

          </Routes>

      </div>

        
    </div>
  );
}

export default App;
