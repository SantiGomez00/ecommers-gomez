import './ItemDetail.css';
import Contador from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext/CartContext';

const ItemDetail = ({id,nombre,img,precio,stock,detalle}) => {

    const { consultarCarrito, addItem, sumarItem, checkStock } = useContext (CartContext)
    const [toCart,setToCart] = useState(0)
    const stockActual = checkStock(stock,id)

    const addCart = (count) => {
        setToCart(count)
        if (consultarCarrito(id)){
            sumarItem(count,id)
        }
        else{
         console.log("se agrego al carrito")
        const objetoSeleccionado = {id, precio, nombre, img}
        addItem ({...objetoSeleccionado, quantity: count})   
        } 
    }

    return(
        <div className="displayGrid">
            <img className="imagenDetail" alt={nombre} src={img} ></img>
            <p className="itemDetail">{nombre} ${precio}</p>
            <p className="description">{detalle}</p>
            {toCart > 0 ? <Link className = "irCarrito" to = "/cart">ir al carrito</Link> : <Contador initial ={0} {...id} stock={stockActual} add ={addCart}></Contador>}
        </div>
    )
}

export default ItemDetail