import './NavBar.css'
import LogoCarrito from './logoCarrito';
import CartWidget from './logo';

const NavBar = () => {
    return (
        <nav id="navBar">
            <CartWidget></CartWidget>
            <div id="nombre">Papelera</div>
            <div id="botones">
                <a href='#navBar'>tienda</a>
                <a href='#navBar'>info</a>
                <a href='#navBar'>carrito</a>
                <LogoCarrito></LogoCarrito>
            </div>
        </nav>
    )
}
export default NavBar