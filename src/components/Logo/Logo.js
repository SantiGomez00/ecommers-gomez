import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div id="logo">
            <img id = "cartWidget" alt="Logo" src = {require("./Logo.png")}></img>
            <Link id="nombre" to="/">PAPELERA</Link>
        </div>
    )
}

export default Logo