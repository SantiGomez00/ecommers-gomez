import { createContext, useState } from "react";

const CartContext = createContext()
export const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState ([])
    console.log(carrito)
    const addItem = (producto) => {
        setCarrito ([...carrito, producto])
    }
    const eliminarItem = (id) => {
        const eliminar = carrito.filter(prod => prod.id !== id)
        setCarrito(eliminar)
    }
    const cantidadCarrito = () => {
        let cantidad = 0
        carrito.forEach(prod => {
            cantidad= cantidad += prod.quantity
        })
        return cantidad
    }
    const consultarCarrito = (id) => {
        return carrito.some(prod => prod.id === id)
    }
    const vaciarCarrito = () => {
        setCarrito([])
    }
    return (
        <CartContext.Provider value = {{carrito, addItem, eliminarItem, cantidadCarrito, consultarCarrito, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext