import React from "react";

import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return(
        <nav class="Nav">
            <ul class="ulNav">
                <li class="liNav"><NavLink to="/" class="aNav" className={({ isActive})=> isActive? "Active" : "aNav"}>Inicio</NavLink></li>
                <li class="liNav"><NavLink to="/UnJugador" class="aNav" className={({ isActive})=> isActive? "Active" : "aNav"}>Solo</NavLink></li>
                <li class="liNav"><NavLink to="/Multijugador" class="aNav" className={({ isActive})=> isActive? "Active" : "aNav"}>Multijugador</NavLink></li>
                <li class="liNav"><NavLink to="/AccionAventura" class="aNav" className={({ isActive})=> isActive? "Active" : "aNav"}>Accion/Aventura</NavLink></li>
                <li class="liNav"><NavLink to="/Disparos" class="aNav" className={({ isActive})=> isActive? "Active" : "aNav"}>Disparos</NavLink></li>
                <li class="liNav"><NavLink to="/Deportes" class="aNav" className={({ isActive})=> isActive? "Active" : "aNav"}>Deportes</NavLink></li>
                <li class="liNav"><NavLink to="/Estrategia" class="aNav" className={({ isActive})=> isActive? "Active" : "aNav"}>Estrategia</NavLink></li>
                <li class="liNav"><NavLink to="/Simulacion" class="aNav" className={({ isActive})=> isActive? "Active" : "aNav"}>Simulacion</NavLink></li>
                <li class="liNav"><NavLink to="/Contacto" class="aNav" className={({ isActive})=> isActive? "Active" : "aNav"}>Contacto</NavLink></li>
            </ul>
        </nav>
    );
}
export default Nav;