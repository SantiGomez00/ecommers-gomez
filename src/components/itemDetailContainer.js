import { useState,useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { firestoreDb } from "../services/firebase"

const ItemDetailContainer = () => {
    const [id, product] = useState ([])
    const {productId}=useParams()
    useEffect (()=>{
        getDoc(doc(firestoreDb,"productos",productId)).then(response => {
            const producto = {id:response.id,...response.data()} 
            product (producto) 
        }) 
        return (() => {product()})
    },[productId])
    return (
        <div>
            <ItemDetail {...id}></ItemDetail>
        </div>
    )

}

export default ItemDetailContainer