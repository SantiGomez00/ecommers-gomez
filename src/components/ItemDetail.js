const ItemDetail = ({precio,stock,detalle}) => {
    return(
        <div>
            <p>{precio}</p>
            <p>{stock}</p>
            <p>{detalle}</p>
        </div>
    )
}

export default ItemDetail