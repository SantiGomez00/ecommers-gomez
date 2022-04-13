import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer  from './components/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <div className="App">
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
              <Route path="/category/:categoryId" element={<ItemListContainer/>} />
              <Route path="/category/:categoryId/detail/:productId" element={<ItemDetailContainer/>} />
            </Routes>
          </BrowserRouter>  
        </div>
    </div>
  );
}

export default App;