
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar.js";
import  ItemDetailContainer from './Components/ItemDetailContainer';
import  ItemListContainer from './Components/ItemListContainer';
import  Cart from './Components/Cart';
import  {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return ( 
    
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <ItemListContainer /> }/>
        <Route path='categories/:categoriesId' element={ <ItemListContainer />} />
        <Route path='cart' element={ < Cart /> } />
        <Route path='details/:detailId' element={ < ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
      
    </>
    
  );
}

export default App;
