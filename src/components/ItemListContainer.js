import "./NavBar.css"
import ItemList from "./itemList"
import {useState,useEffect} from "react"
import { CargarProductos } from "./asyncMock"

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState ([])
    useEffect (()=>{
        CargarProductos().then(prods=>{
            setProductos(prods)
        }).catch(error=>{console.log("error")})        
    },[])
    return (
        <div>
            <ItemList productos={productos}></ItemList>
        </div>
    )
}

export default ItemListContainer