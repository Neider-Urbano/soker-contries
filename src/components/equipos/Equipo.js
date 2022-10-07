import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import favoritoActivo from "../../images/icons8-me-gusta-30 (1).png"
import favoritoDesactivo from "../../images/icons8-me-gusta-30.png"
import "../../styles/components/Equipo.css"

const Equipo = ({equipo, idCompeticion, addFavoriteEquipo, existeEquipoFavorite}) => {
  const [activarFavorito,setActivarFavorito]=useState(existeEquipoFavorite)
  const [clickFavorito,setClickFavorito]=useState(existeEquipoFavorite)
  var objetoEquipoFavorito={
    idEquipo:"",
    srcEquipo:"",
    nameEquipo:"",
    idCompeticion: ""
  }

  const cambiarSrc=(idEquipo,srcEquipo, nameEquipo, idCompeticion)=>{
    setClickFavorito(true);
    objetoEquipoFavorito.idEquipo=idEquipo;
    objetoEquipoFavorito.srcEquipo=srcEquipo;
    objetoEquipoFavorito.nameEquipo=nameEquipo;
    objetoEquipoFavorito.idCompeticion=idCompeticion;
    if(clickFavorito===false) addFavoriteEquipo(objetoEquipoFavorito)
    setActivarFavorito(true)
  }
  const onMouseOver=()=>{
    if(!clickFavorito)setActivarFavorito(true)
  }
  const onMouseOut=()=>{
    if(!clickFavorito)setActivarFavorito(false)
  }

  return (
    <div className="divEquipo">
            <Link to={`/equipo/${equipo.team_key}/${idCompeticion}`}>
              <img src={equipo.team_badge} alt=""/>
            </Link>
            <img src={activarFavorito ? favoritoActivo : favoritoDesactivo} 
                  alt="" className="imgFavorito"
                  onClick={()=>{cambiarSrc(equipo.team_key,
                                          equipo.team_badge,
                                          equipo.team_name,
                                          idCompeticion)}}
                  onMouseOut={()=>{onMouseOut()}} 
                  onMouseOver={()=>{onMouseOver()}}
            />
            <div>
              <p>{equipo.team_name}</p>
            </div>
        
    </div>
  )
}

export default Equipo