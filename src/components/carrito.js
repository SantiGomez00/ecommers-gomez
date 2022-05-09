import CartContext from "./cartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {writeBatch, collection, getDocs, query, where, documentId, addDoc} from "firebase/firestore";
import { firestoreDb } from "../services/firebase";

const Carrito = () => {
    const {carrito} = useContext (CartContext)
    const {eliminarItem} = useContext (CartContext)
    const {vaciarCarrito} = useContext (CartContext)
    const [mensaje, setMensaje] = useState("no hay productos, dale")
    let nombreComprador = 0
    let email = 0
    let total = 0


    const ordenCompra = () => {
        const orden = {
            item: carrito,
            comprador: {
                nombre: "juan",
                telefono: 12345678,
                email: "juan@mail.com"
            },
            total: precioFinal,
            date: new Date()
        }
        const idProductosComprar = carrito.map(prod=>prod.id)
        const actualizar = writeBatch(firestoreDb)
        const collectionRef = collection(firestoreDb,"productos")
        const sinStock = []
    //aca arranca la desgracia
        const datosCompra = collection(firestoreDb,"orders")
    //
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
            getDocs (query(datosCompra,where(documentId(), "==", id))).then(response => {
                response.docs.forEach(doc=>{
                    const dataDoc = doc.data()
                    nombreComprador = dataDoc.comprador.nombre
                    email = dataDoc.comprador.email
                    total = dataDoc.total
                    setMensaje("gracias "  + nombreComprador + " la id de su compra es " + id + " por tu compra por un valor de " + total + ", enviamos toda la información a tu email " + email)
                })
            })
            vaciarCarrito()
        }).catch(error=>console.log(error))
    }

    let precioFinal = 0
    
    carrito.forEach(prod => {
        precioFinal += prod.precio * prod.quantity        
    });
 
    return(
        <div>
            {carrito.map (prod =>
                <div key= {prod.id}>
                    <img src={prod.img}>
                    </img>
                    producto: {prod.nombre}
                    precio: {prod.precio}
                    cantidad: {prod.quantity}
                    <div>
                        <button onClick={e => eliminarItem(prod.id)}>
                           eliminar producto 
                        </button>
                    </div>
                </div>
            )}
            {precioFinal === 0? 
                <div>
                    <p>
                    {mensaje}    
                    </p>
                    <Link to = '/'>
                        ir a la tienda
                    </Link>
                </div>: 
                <div> 
                    total: $ {precioFinal}
                    <button onClick={vaciarCarrito}>
                        vaciar carrito
                    </button>
                    <button onClick={ordenCompra}>
                        comprar
                    </button>
                </div>
            } 
        </div>
    )
}

export default Carrito