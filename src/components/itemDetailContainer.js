import { CargarDetalles } from "./asyncMockProducto"
import { useState,useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import Contador from "./ItemCount"

const ItemDetailContainer = () => {
    const addCart = (cantidad) =>{
        console.log("se agrego " +cantidad +" al carrito")
      }
    const [id, product] = useState ([])
    const {productId}=useParams()
    useEffect (()=>{
        CargarDetalles(productId).then(prod=>{product(prod)}).catch(error=>{console.log("error")},[productId])
    })
    return (
        <div>
            <ItemDetail {...id}></ItemDetail>
            <Contador initial={1}stock={10}add={addCart}></Contador>
        </div>
    )

}

export default ItemDetailContainer