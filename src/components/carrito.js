import CartContext from "./cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Carrito = () => {
    const {carrito} = useContext (CartContext)
    const {eliminarItem} = useContext (CartContext)
    const {vaciarCarrito} = useContext (CartContext)

    let precioFinal = 0
    
    carrito.forEach(prod => {
        precioFinal += prod.precio * prod.quantity        
    });
 
    return(
        <div>
            {carrito.map (prod =>
                <div key= {prod.id}>
                    <img src={prod.img}>
                    </img>
                    producto: {prod.nombre}
                    precio: {prod.precio}
                    cantidad: {prod.quantity}
                    <div>
                        <button onClick={e => eliminarItem(prod.id)}>
                           eliminar producto 
                        </button>
                    </div>
                </div>
            )}
            {precioFinal === 0? 
                <div>
                    <p>
                        no hay productos en el carrito :c
                    </p>
                    <Link to = '/'>
                        ir a la tienda
                    </Link>
                </div>: 
                <div> 
                    total: $ {precioFinal}
                    <button onClick={vaciarCarrito}>
                        vaciar carrito
                    </button>
                </div>
            } 
        </div>
    )
}

export default Carrito