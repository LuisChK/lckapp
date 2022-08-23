
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar.js";
import  ItemDetailContainer from './Components/ItemDetailContainer';
import  ItemListContainer from './Components/ItemListContainer';
import  Cart from './Components/Cart';
import  {BrowserRouter, Routes, Route} from 'react-router-dom';
import  CartProvider from './context/CartContext';


function App() {
  return ( 
    
    <>
      <BrowserRouter>
      
     <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={ <ItemListContainer /> }/>
        <Route path='categories/:categoriesId' element={ <ItemListContainer />} />
        <Route path='cart' element={ < Cart /> } />
        <Route path='details/:detailId' element={ < ItemDetailContainer />} />
      </Routes>
     </CartProvider>
      </BrowserRouter>
      
    </>
    
  );
}

export default App;
