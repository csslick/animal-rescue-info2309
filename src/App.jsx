import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Detail from './pages/Detail';
import Nav from './components/Nav';

function App() {
  const API_KEY = 'sXxYjidiN3t6GurP%2FlL532W8cmmt4qCl%2F%2BFF72uNIWACqGGmumk6enycmK39NmiGxpmGhhxqFXvWYu4zH8f3zg%3D%3D'
  const API_URL = `http://apis.data.go.kr/6260000/BusanPetAnimalInfoService`;
  
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
