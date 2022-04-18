import './NavBar.css'
import Contador from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({id,nombre,img,precio,stock,detalle}) => {
    const [quantity, setQuantity] = useState (0)
    const addCart = (count) => {
        console.log("se agrego al carrito")
        setQuantity(count)
    }
    return(
        <div>
            <p id="nombre">{nombre}</p>
            <img id="imagen" src={img} ></img>
            <p>{detalle}</p>
            <p>$ {precio}</p>
            {quantity > 0? <Link to = "/cart">ir al carrito</Link> : <Contador initial ={1} {...id} stock={stock} add ={addCart}></Contador>}
        </div>
    )
}

export default ItemDetail