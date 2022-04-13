import { Link } from "react-router-dom"
import './NavBar.css'


const Item = ({id,nombre,img},) => {
    console.log(id)
    return(
        <div id="tarjetaProducto">
            <p id="nombre">{nombre}</p>
            <img id="imagen" src={img} ></img>
            <p>
                <Link to={`detail/${id}`}>info</Link> 
            </p>
        </div>
    )
}
  
export default Item