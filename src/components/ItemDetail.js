import './NavBar.css'

const ItemDetail = ({nombre,img,precio,stock,detalle}) => {
    return(
        <div>
            <p id="nombre">{nombre}</p>
            <img id="imagen" src={img} ></img>
            <p>{detalle}</p>
            <p>$ {precio}</p>
            <p>stock: {stock}</p>
        </div>
    )
}

export default ItemDetail