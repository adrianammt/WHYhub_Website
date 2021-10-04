import { NavLink } from "react-router-dom";

export default function Header(){
    return(
    <nav>
        <NavLink to="/home">Logo</NavLink>
        <NavLink to="/QuienesSomos">Quienes somos</NavLink>
        <NavLink to="/QueHacemos">Que hacemos</NavLink>
        <NavLink to="/Contacto">Contacto</NavLink>
    </nav>
    )
}