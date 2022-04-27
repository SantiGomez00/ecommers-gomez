import './NavBar.css'
import LogoCarrito from './logoCarrito';
import CartWidget from './logo';
import { Link, NavLink } from 'react-router-dom';   
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestoreDb } from '../services/firebase';

const NavBar = () => {
    const [category, setCategories]=useState([])
    useEffect(()=>{
        getDocs(collection(firestoreDb,"categorias")).then(response => {
            const category = response.docs.map (doc =>{
                return {id:doc.id,...doc.data()}
            })
            console.log(category)
            setCategories(category)
        })
    },[])
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