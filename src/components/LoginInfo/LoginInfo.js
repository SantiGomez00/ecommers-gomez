import './LoginInfo.css'
import { useContext,useState } from "react";
import { doc,getDoc } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase";
import { Link } from "react-router-dom";
import CartContext from "../CartContext/CartContext";

const LoginInfo = () => {
    const {setearLogin} = useContext(CartContext)
    const [login, setLogin] = useState(false)
    const [error, setError] = useState(0)
    const [name, setName] = useState()
    const [cargando, setCargando] = useState(false)

    const handleOnSubmit = (event) => {
        setCargando(true)
        event.preventDefault()
        let {uname, pass} = document.forms[0]
        getDoc (doc(firestoreDb,"users", uname.value)).then(response =>{
            if(response.exists(doc)){
                let dataDoc = response.data()
                if(dataDoc.password !== pass.value){
                    setCargando(false)
                    setError(true)
                    setTimeout(() => {
                        setError(0)
                    }, 1000);
                }
                else{
                    setLogin(true)
                    setearLogin(dataDoc)
                    setName(uname.value)
                    setCargando(false)
                }
            }
            else{
                setCargando(false)
                setError(true)
                setTimeout(() => {
                    setError(0)
                }, 1000);
            }
        })
    }

    if(cargando){
        return(
            <div>
                Cargando...
            </div>
        )
    }

    return (
        <div id="logueado" >
            {login ? <div id="usuario"> logueado: {name}</div> : 
            <form onSubmit={handleOnSubmit}>
                <div id="login">
                    <div>
                        <label> nombre usuario: </label>
                        <input type="text" name="uname" required></input>
                    </div>
                    <div>
                        <label> constraseña: </label>
                        <input className="contra" type="password" name="pass" required></input>
                    </div>
                    {error !== 0 ? <div>los datos no coinciden</div> : <div id = "registerClick"><Link to="/register"><button>Registrarse</button></Link><input type="submit"></input></div>}
                </div>
            </form>}       
        </div>
    )
}

export default LoginInfo


