import {useState,useEffect} from "react";
import "./ItemCount.css"

const Contador = ({initial,stock,add}) =>{
    const [count,setCount] = useState (initial)
    useEffect (() =>{
    },[])
    const sumar = () => {
        if ( count >= stock ) {
            console.log("no se puede agregar mas :(")
        }
        else {
            setCount (count +1)
        }
    }
    const restar = () => {
        if (count <= 1 ){
            console.log ("no puedes comprar en negativo :)")
        }
        else {
            setCount (count -1)
        }
    }
    return (
        <div>
            <div id="contenedorCounter">
                <button onClick={restar}> - </button>
                <p id="cantidad">{count}</p>
                <button onClick={sumar}> + </button> 
            </div>
            <div className="agregarCarrito">
                <button id="addCarrito" onClick={()=>add(count)}>agregar al carrito</button>
            </div>
            <div className="stock">stock = {stock}</div>
        </div>
    )
}

export default Contador