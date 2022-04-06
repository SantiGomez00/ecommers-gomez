const Item = ({nombre,img,precio,stock},) => {
    return(
        <div>
            <p>{nombre}</p>
            <img src={img} ></img>
            <p>precio: {precio}</p>
            <p>stock: {stock}</p> 
        </div>
    )
}

export default Item