import "./Footer.css"
import { NavLink } from "react-router-dom";
import Logo from "../assets/WhyHubLogoA1.png"

export default function Footer(){
    return(
        <section className="FooterNav">
            <NavLink to="/home" className="NavLink"><img src={Logo} alt="WhyHub Logo" className="Logo"/></NavLink>
            <div>
                <ul>
                    <li>Quienes somos</li>
                    <li>Que hacemos</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div>Redes Sociales</div>
        </section>
    )
}