import "./NavBar.css"
import CartContext from "./cartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const LogoCarrito = () => {
    const {cantidadCarrito} = useContext (CartContext)

    let mostrarCarrito = cantidadCarrito() 

    return (
        
        <div>
            {mostrarCarrito !== 0? 
                <Link to ='./cart'>
                <img id = "carritoCompra" src = {require("./carritoCompra.png")}></img>
                <div id = "cantidad">{cantidadCarrito()}</div>
                </Link> : <div></div>
            }
        </div>   
        
    )
}

export default LogoCarrito