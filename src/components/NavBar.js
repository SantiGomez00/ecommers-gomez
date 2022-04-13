import './NavBar.css'
import LogoCarrito from './logoCarrito';
import CartWidget from './logo';
import { Link, NavLink } from 'react-router-dom';
import { getCategories } from './asyncMockProducto';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [category, setCategories]=useState([])
    useEffect(()=>{getCategories().then(category=>{setCategories(category)})},[])
    return (
        <nav id="navBar">
            <CartWidget></CartWidget>
            <Link id="nombre" to="/">Papelera</Link>
            <div id="botones">
                {category.map(cat=><NavLink className="boton" key={cat.id} to={`/category/${cat.id}`}>{cat.descripcion}</NavLink>)}
                <LogoCarrito></LogoCarrito>
            </div>
        </nav>
    )
}
export default NavBar