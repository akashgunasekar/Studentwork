
import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom'

import { Navbar } from './Component/Navbar';
import { Hone } from './Component/Hone';
import { Product } from './Component/Product';
import { Cart } from './Component/Cart';
import { useState } from 'react';



function App() {

const [array,setarray]= useState([])
console.log(array);

  return (
    <div>
      
      <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Hone></Hone>} > </Route>
        <Route path='/product' element={<Product setarray={setarray} array={array}  ></Product>}></Route>
     
        <Route path='/cart' element = {<Cart array={array}  setarray={setarray}  ></Cart>} ></Route>
      </Routes>
      
      </BrowserRouter>

      {/* <Test></Test> */}
      
    </div>
  );
}

export default App;
