import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './pages/Details/Detail';
import Home from './pages/Home/Home';

function App(){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;