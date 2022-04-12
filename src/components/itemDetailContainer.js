import { CargarDetalles } from "./asyncMockProducto"
import { useState,useEffect } from "react"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [id, product] = useState ([])
    useEffect (()=>{
        CargarDetalles(2).then(prod=>{product(prod)}).catch(error=>{console.log("error")},[])
    })
    return (
        <div>
            <ItemDetail {...id}></ItemDetail>
        </div>
    )

}

export default ItemDetailContainer