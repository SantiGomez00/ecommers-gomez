import { Link } from "react-router-dom"
import './Item.css'


const Item = ({id,nombre,img,precio},) => {
    return(
        <li className = "flexItems">
            <div className = "imagenItems">
                <img id="imagen" alt={nombre} src={img} ></img>
            </div>
            <p className="nombre">{nombre}</p>
            <p className="precio">{precio}$</p>
            <p>
                <Link className="info" to={`detail/${id}`}>info</Link> 
            </p>
        </li>
    )
}
  
export default Item