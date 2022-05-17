import { useState,useEffect } from "react"
import ItemDetail from "../Itemdetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"

const ItemDetailContainer = () => {
    const [id, product] = useState ([])
    const [cargando, setCargando] = useState(false)
    const {productId}=useParams()
    useEffect (()=>{
        setCargando(true)
        getDoc(doc(firestoreDb,"productos",productId)).then(response => {
            const producto = {id:response.id,...response.data()} 
            product (producto) 
            setCargando(false)
        }) 
        return (() => {product()})
        
    },[productId])

    if(cargando){
        return(
            <div>
                Cargando...
            </div>
        )
    }

    return (
        <div>
            <ItemDetail {...id}></ItemDetail>
        </div>
    )

}

export default ItemDetailContainer