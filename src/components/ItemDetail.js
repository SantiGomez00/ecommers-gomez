import './NavBar.css';
import Contador from './ItemCount';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './cartContext';

const ItemDetail = ({id,nombre,img,precio,stock,detalle}) => {
    const {consultarCarrito} = useContext (CartContext)
    const {addItem} = useContext (CartContext)
    const addCart = (count) => {
        console.log("se agrego al carrito")
        const objetoSeleccionado = {id, precio, nombre, img}
        addItem ({...objetoSeleccionado, quantity: count})
    }
    return(
        <div>
            <p id="nombre">{nombre}</p>
            <img id="imagen" src={img} ></img>
            <p>{detalle}</p>
            <p>$ {precio}</p>
            {consultarCarrito(id) ? <Link to = "/cart">ir al carrito</Link> : <Contador initial ={1} {...id} stock={stock} add ={addCart}></Contador>}
        </div>
    )
}

export default ItemDetail