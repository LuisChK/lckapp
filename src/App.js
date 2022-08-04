import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar.js";
import  ItemListContainer from './Components/ItemListContainer';



function App() {
  return (
    
    <>

      <Navbar />
      <ItemListContainer texto="Luis"/>
      

      
    </>
    
  );
}

export default App;
