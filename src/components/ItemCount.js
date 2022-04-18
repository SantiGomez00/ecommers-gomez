import {useState,useEffect} from "react";

import "./NavBar.css"

const Contador = ({initial,stock,add}) =>{
    const [count,setCount] = useState (initial)
    useEffect (() =>{
        console.log("funciona")
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
            <div id="counter">
                <button id="botonMenos" onClick={restar}> - </button>
                <p id="cantidad">{count}</p>
                <button id="botonMas" onClick={sumar}> + </button> 
                <div>stock = {stock}</div>
            </div>
            <button id="addCarrito" onClick={()=>add(count)}>agregar al carrito</button>
            
        </div>
    )
}

export default Contador