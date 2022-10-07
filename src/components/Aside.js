import React,{useEffect, useState} from 'react'
import "../styles/components/aside.css"
import iconoSelecciones from "../images/icons8-bandera-2-50.png"
import iconoEquipos from "../images/icons8-escudo-24.png"
import iconoJugadores from "../images/icons8-soccer-shoe-48.png"
import iconoJugador from "../images/icons8-cristiano-ronaldo-48.png"
import iconoCreador from "../images/icons8-código-50.png"
import iconoHome from "../images/icons8-casa-64.png"
import { Link } from 'react-router-dom'

const Aside = ({activeLi}) => {
  return (
    <div className="asideSoccer">
      <ul>
        <Link to="/soccer"><li className="soccer"><img src={iconoHome} onClick={(e)=>{activeLi(e)}} alt="" /></li></Link>
        <Link to="/favorite/selecciones"><li className="selecciones"><img src={iconoSelecciones} onClick={(e)=>{activeLi(e)}} alt=""/></li></Link>
        <Link to="/favorite/equipos"><li className="equipos"><img src={iconoEquipos} onClick={(e)=>{activeLi(e)}} alt=""/></li></Link>
        <Link to="/favorite/jugadores"><li className="jugadores"><img src={iconoJugadores} onClick={(e)=>{activeLi(e)}} alt=""/></li></Link>
        <Link to="/jugadores/creados"><li className="creados"><img src={iconoJugador} onClick={(e)=>{activeLi(e)}} alt=""/></li></Link>
        <Link to="/desarrollador"><li className="desarrollador"><img src={iconoCreador} onClick={(e)=>{activeLi(e)}} alt=""/></li></Link>
      </ul>
    </div>
  )
}

export default Aside