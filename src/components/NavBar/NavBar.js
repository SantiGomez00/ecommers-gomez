import './NavBar.css'
import LogoCarrito from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';   
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase';
import LoginInfo from '../LoginInfo/LoginInfo';

const NavBar = () => {
    const [category, setCategories]=useState([])
    useEffect(()=>{
        getDocs(collection(firestoreDb,"categorias")).then(response => {
            const category = response.docs.map (doc =>{
                return {id:doc.id,...doc.data()}
            })
            setCategories(category)
        })
    },[])
    return (
        <nav id="navBar">
            <LoginInfo></LoginInfo>
            <Logo></Logo>
            <div>
                <div id="botones">
                    {category.map(cat=><NavLink className="boton" key={cat.id} to={`/category/${cat.id}`}>{cat.descripcion}</NavLink>)}  
                    <LogoCarrito></LogoCarrito> 
                </div>
            </div>
            
        </nav>
    )
}
export default NavBar