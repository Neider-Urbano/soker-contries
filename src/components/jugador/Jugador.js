import React, {useState} from 'react'
import {Link} from "react-router-dom"
import favoritoActivo from "../../images/icons8-me-gusta-30 (1).png"
import favoritoDesactivo from "../../images/icons8-me-gusta-30.png"
import "../../styles/components/Jugador.css"

const Jugador = ({jugador, addRemoveFavorite}) => {
    const [activarFavorito,setActivarFavorito]=useState(false)
    const [clickFavorito,setClickFavorito]=useState(false)
    var objetoJugadorFavorito={
        idJugador:"",
        srcJugador:"",
        nameJugador:""
    }

    const cambiarSrc=(idJugador,srcJuidJugador, nameJuidJugador)=>{
        setClickFavorito(!clickFavorito);
        objetoJugadorFavorito.idJugador=idJugador;
        objetoJugadorFavorito.srcJugador=srcJuidJugador;
        objetoJugadorFavorito.nameJugador=nameJuidJugador;
        addRemoveFavorite(objetoJugadorFavorito, clickFavorito)
        setActivarFavorito(true)
    }
    const onMouseOver=()=>{
        if(!clickFavorito)setActivarFavorito(true)
    }
    const onMouseOut=()=>{
        if(!clickFavorito)setActivarFavorito(false)
    }
  return (
    <div className="divJugador">
        <Link to={`/jugador/${jugador.player_id}`}>
            <img src={jugador.player_image} alt=""/>
        </Link>
        <img src={activarFavorito ? favoritoActivo : favoritoDesactivo} 
                alt="" className="imgFavorito" id={jugador.player_id}
                onClick={()=>{cambiarSrc(jugador.player_id,jugador.player_image,jugador.player_name)}}
                onMouseOut={()=>{onMouseOut()}} 
                onMouseOver={()=>{onMouseOver()}}
            />
        <div>
            <p>{jugador.player_name}</p>
        </div>
    </div>
  )
}

export default Jugador