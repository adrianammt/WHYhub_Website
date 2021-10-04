import { NavLink } from "react-router-dom";
import Logo from "../assets/WhyHubLogoA1.png"
import "./Header.css"

export default function Header(){
    return(
    <nav className="HeaderNav">
        <NavLink to="/home" className="NavLink"><img src={Logo} alt="WhyHub Logo" className="Logo"/></NavLink>
        <NavLink to="/QuienesSomos" className="NavLink">Quienes somos</NavLink>
        <NavLink to="/QueHacemos" className="NavLink">Que hacemos</NavLink>
        <NavLink to="/Contacto" className="NavLink">Contacto</NavLink>
    </nav>
    )
}