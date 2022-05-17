import "./CartWidget.css"
import CartContext from "../CartContext/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const LogoCarrito = () => {
    const {cantidadCarrito} = useContext (CartContext)

    let mostrarCarrito = cantidadCarrito() 

    return (
        
        <div id="cart">
            {mostrarCarrito !== 0? 
                <Link to ='./cart'>
                <img id = "carritoCompra" alt = "carrito" src = {require("./CartWidget.png")}></img>
                {cantidadCarrito()}
                </Link> : <div></div>
            }
        </div>   
        
    )
}

export default LogoCarrito