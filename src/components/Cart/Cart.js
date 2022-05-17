import "./Cart.css"
import CartContext from "../CartContext/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {writeBatch, collection, getDocs, query, where, documentId, addDoc} from "firebase/firestore";
import { firestoreDb } from "../../services/firebase";

const Carrito = () => {
    const {carrito, eliminarItem, vaciarCarrito, chequearLogin, chequearDatos, precioFinal} = useContext(CartContext)
    const [cargando, setCargando] = useState(false)
    const [mensaje, setMensaje] = useState("no hay productos")
    const [mensajeCompra, setMensajeCompra] = useState("comprar")
    
    console.log(cargando)

    let costo = precioFinal()


    const ordenCompra = () => {
        setCargando(true)
        console.log(cargando)
        if(chequearLogin() === true){
            let comprador = chequearDatos()
            const orden = {
                item: carrito,
                comprador: {
                    nombre: comprador.nombre,
                    telefono: comprador.phone,
                    email: comprador.mail
                },
                total: costo,
                date: new Date()
            }
            const idProductosComprar = carrito.map(prod=>prod.id)
            const actualizar = writeBatch(firestoreDb)
            const collectionRef = collection(firestoreDb,"productos")
            const sinStock = []
            getDocs (query(collectionRef,where(documentId(), "in", idProductosComprar))).then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const cantidadProducto = carrito.find (prod => prod.id === doc.id)?.quantity
                    if(dataDoc.stock >= cantidadProducto){
                        actualizar.update(doc.ref,{stock: dataDoc.stock - cantidadProducto})
                    } else{
                        sinStock.push({id:doc.id,...dataDoc})
                    }
                })
            }).then(() => {
                if(sinStock.length === 0) {
                    const collectionRef = collection (firestoreDb, "orders")

                    return addDoc (collectionRef,orden)
                }
                else{
                    return Promise.reject ({name:"stock error", productos: sinStock})
                }
            }).then(({id}) => {
                actualizar.commit()
            }).catch( error => {
                console.log(error)
            }).finally (() => {
                setMensaje("gracias por la compra, volver a la tienda")
                vaciarCarrito()
                setCargando(false)
            })
            
            
        }
        else{
            setCargando(false)
            setMensajeCompra("logueate")
            setTimeout(() => {
                setMensajeCompra("comprar")
            },500);
        }
    
    }
    if(cargando){
        return(
            <div>
                Cargando...
            </div>
        )
    }
 
    return(
        <div>
            {carrito.map (prod =>
                <div key= {prod.id} className = "grillaCarrito">
                    <div>
                        {prod.nombre}
                    </div>
                    <img alt = {prod.nombre} src={prod.img}></img>
                    <div>
                        precio: {prod.precio}
                    </div>
                    <div>
                        cantidad: {prod.quantity}
                    </div>
                    
                    <div className = "buttonCart" onClick={e => eliminarItem(prod.id)}>
                        eliminar producto 
                    </div>
                </div>
            )}
            {costo === 0? 
                <div className = "carritoVacio">
                    <p>
                    {mensaje}    
                    </p>
                    <Link className = "clickCarritoVacio" to = '/'>
                        ir a la tienda
                    </Link>
                </div>: 
                <div> 
                    <div className = "precioTotal">
                        total: $ {costo}
                    </div>
                    <div className = "buttonCart clear" onClick={vaciarCarrito}>
                        vaciar carrito
                    </div>
                    <div>
                        <div className="buttonOrden" onClick={ordenCompra}>
                            {mensajeCompra}
                        </div>
                    </div>
                </div>
            } 
        </div>
    )
}

export default Carrito