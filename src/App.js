import './App.css';
import Carrito from './components/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import RegisterAccount from './components/Registrer/Registrer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './components/CartContext/CartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
        <div className="App">
          <CartContextProvider>
            <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route path="/category/:categoryId/detail/:productId" element={<ItemDetailContainer/>} />
                <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
                <Route path="/register" element ={<RegisterAccount/>} />
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/cart" element ={<Carrito/>} />
              </Routes>
            </BrowserRouter> 
          </CartContextProvider> 
        </div>
    </div>
  );
}

export default App;