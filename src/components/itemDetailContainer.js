import { CargarDetalles } from "./asyncMockProducto"
import { useState,useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [id, product] = useState ([])
    const {productId}=useParams()
    useEffect (()=>{
        CargarDetalles(productId).then(prod=>{product(prod)}).catch(error=>{console.log("error")},[productId])
    })
    return (
        <div>
            <ItemDetail {...id}></ItemDetail>
        </div>
    )

}

export default ItemDetailContainer