import React from 'react';
import './App.css';
import { Register } from './components/Register';
import { Nav } from './components/Nav';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Products } from './components/Products';
import { Login } from './components/Login';
import { Private } from './components/Private';
import { Createproduct } from './components/Createproduct';


function App() {
  return (
    <div>
    <BrowserRouter>
     <Nav />
    
     <Routes>
     <Route element={<Private />}>
     <Route path='/' element={<Products />}></Route>
     <Route path='/create' element={<Createproduct />}></Route>
     </Route>
     <Route path='/register' element={<Register />}></Route>
     <Route path='/login' element={<Login />}></Route>

     </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
