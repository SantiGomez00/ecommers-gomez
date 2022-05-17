import Item from "../Item/Item";

const ItemList = ({productos}) => {
    return (
        <ul>
            {productos.map(prod=><Item key={prod.id}{...prod}></Item>)}
        </ul>
    )
}

export default ItemList