import "./NavBar.css"
import CartContext from "./cartContext"
import { useContext } from "react"

const LogoCarrito = () => {
    const {cantidadCarrito} = useContext (CartContext)
    return (
        
        <div>
            <img id = "carritoCompra" src = {require("./carritoCompra.png")}></img>
            <div id = "cantidad">{cantidadCarrito()}</div>
        </div>   
        
    )
}

export default LogoCarrito