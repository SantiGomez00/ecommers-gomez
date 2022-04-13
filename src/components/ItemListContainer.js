import "./NavBar.css"
import ItemList from "./itemList"
import {useState,useEffect} from "react"
import { CargarProductos } from "./asyncMockProducto"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {
    const {categoryId} = useParams ()
    const [productos, setProductos] = useState ([])
    useEffect (()=>{
        CargarProductos(categoryId).then(prods=>{
            setProductos(prods)
        }).catch(error=>{console.log("error")})        
    },[categoryId])
    return (
        <div>
            <ItemList productos={productos}></ItemList>
        </div>
    )
}

export default ItemListContainer