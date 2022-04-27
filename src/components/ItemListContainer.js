import "./NavBar.css"
import ItemList from "./itemList"
import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestoreDb } from "../services/firebase"

const ItemListContainer = (props) => {
    const {categoryId} = useParams ()
    const [productos, setProductos] = useState ([])
    useEffect (()=>{
        const collectionRef = categoryId
        ? query (collection(firestoreDb,"productos"),where ("categoria","==",categoryId))
        : collection (firestoreDb,"productos")
        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return{id:doc.id,...doc.data()}
            })
            setProductos(products)
        })
    },[categoryId])
    return (
        <div>
            <ItemList productos={productos}></ItemList>
        </div>
    )
}

export default ItemListContainer