import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Contador from './components/ItemCount'


function App() {
  const addCart = (cantidad) =>{
  console.log("se agrego " +cantidad +" al carrito")
}
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
      <Contador initial={1}stock={10}add={addCart}></Contador>
    </div>
  );
}

export default App;