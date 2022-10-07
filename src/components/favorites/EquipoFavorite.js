import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import favoritoActivo from "../../images/icons8-me-gusta-30 (1).png"
import favoritoDesactivo from "../../images/icons8-me-gusta-30.png"

const EquipoFavorite = ({equipo, removeFavoriteFunction}) => {

const [activarFavorito,setActivarFavorito]=useState(true)
useEffect(()=>{
    console.log(equipo)
})
  return (
    <div className="divEquipo">
            <Link to={`/equipo/${equipo.idSeleccion}/${equipo.idCompeticion}`}>
              <img src={equipo.srcEquipo} alt=""/>
            </Link>
            <img src={activarFavorito ? favoritoActivo : favoritoDesactivo} 
                  alt="" className="imgFavorito"
                  onClick={()=>{
                    setActivarFavorito(false);
                    removeFavoriteFunction(equipo.idEquipo)}
                  }
            />
            <div>
              <p>{equipo.nameEquipo}</p>
            </div>
        
    </div>
  )
}

export default EquipoFavorite