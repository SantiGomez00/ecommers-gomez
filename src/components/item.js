const Item = ({nombre,img},) => {
    return(
        <div>
            <p>{nombre}</p>
            <img src={img} ></img>
            <p>
                <button>info</button>
            </p>
        </div>
    )
}

export default Item