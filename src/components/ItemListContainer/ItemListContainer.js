import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"

const ItemListContainer = (props) => {
    const {categoryId} = useParams ()
    const [cargando, setCargando] = useState(false)
    const [productos, setProductos] = useState ([])
    useEffect (()=>{
        setCargando(true)
        const collectionRef = categoryId
        ? query (collection(firestoreDb,"productos"),where ("categoria","==",categoryId))
        : collection (firestoreDb,"productos")
        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return{id:doc.id,...doc.data()}
            })
            setProductos(products)
            setCargando(false)
        })
    },[categoryId])

    if(cargando){
        return(
            <div className="cargando">
                Cargando...
            </div>
        )
    }

    return (
        <div>
            <ItemList productos={productos}></ItemList>
        </div>
    )
}

export default ItemListContainer