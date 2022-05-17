import './Register.css'
import { useState } from "react";
import { firestoreDb } from "../../services/firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const RegisterAccount = () => {
    const [isRegistred, setRegister] = useState(false)
    const [mensaje, setMensaje] = useState("registrar una nueva cuenta")
    const [cargando, setCargando] = useState(false)
    const collectionRef = collection(firestoreDb, "users")
    const handleOnSubmit = (event) => {
        setCargando(true)
        event.preventDefault()
        let {name, password, mail, phone} = document.forms[1]
        getDoc(doc(collectionRef, name.value)).then(response =>{
            if(response.exists(doc)){
                setMensaje("nombre de usuario en uso")
            }
            else{
                const usuario = {
                    nombre: name.value,
                    password: password.value,
                    mail: mail.value,
                    phone: phone.value
                }
                setRegister(true)
                setDoc(doc(collectionRef, name.value), usuario)
                setCargando(false)
            }
            setCargando(false)
        })
    }

    if(cargando){
        return(
            <div className="cargando">
                Cargando...
            </div>
        )
    }

    return(
        <div id = "registerContainer">
            {isRegistred ? 
                <div>
                    <div className ="registrado">
                        registrado correctamente
                    </div>
                    <Link className = "aProductos" to="/"> volver a elegir productos </Link>
                </div> :
            <form className = "formRegister" onSubmit={handleOnSubmit}>
                <div className = "tituloRegister">{mensaje}</div>
                <label>nombre de usuario</label>
                <input type="text" name="name" required></input>
                <label>constraseña</label>
                <input type="password" name="password" required></input>
                <label>email</label>
                <input type="email" name="mail" required></input>
                <label>telefono</label>
                <input type="number" name="phone" required></input>
                <div>
                    <input type="submit"></input>
                </div>
            </form>
            }
        </div>
    )
}

export default RegisterAccount