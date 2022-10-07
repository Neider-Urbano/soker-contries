import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { connect } from "react-redux";
import {getEquipo, addFavorite} from "../../redux/actions";
import {nanoid} from "nanoid"
import "../../styles/components/DetailEquipo.css"
import Jugador from "../jugador/Jugador"
import Pagination from "../Pagination";
import Loading from '../Loading';
import iconoJugador from "../../images/icons8-futbol-playa-24.png"

const DetailEquipo = (props) => {
  const params=useParams();
  const {idEquipo,idLiga}=params;
  const {equipo}=props;
  
  const getEquiposAsync=async()=>{
    await props.getEquipo(idLiga,idEquipo);
  }
  const addRemoveFavorite=(objetoJugador, booleanClickFavorito)=>{
    if(booleanClickFavorito){
      // props.removeFavorite(objetoJugador.idJugador, "jugadores")
    }else{
      props.addFavorite(objetoJugador, "jugadores")
    }
  } 
  useEffect(()=>{
    getEquiposAsync();
  },[])
  return (
    <div className="divDetailEquipo">
      {!equipo[0] ? <Loading /> : <Pagination pagina={null} setPagina={null} maximo={0}/>}
      <div className="divEquipoJugadores">
        {equipo[0] && equipo.map((datosEquipo)=>{
            return <div key={Math.random()} className="divEquipoInformacion">
                      <div>
                        <img src={datosEquipo.team_badge}/>
                        <p>Nombre Equipo</p><p>{datosEquipo.team_name}</p>
                        <p>Entrenador</p><p>{datosEquipo.coaches[0].coach_name}</p>
                      </div>
                  </div>
        })}

        {equipo[0] && 
          <div className="divGetJugadores">
            <div className="divTituloJugadores">
              <img src={iconoJugador} alt=""/>
              <p>Jugadores</p>
            </div>
            <div className="divJugadores">
                {equipo[0] && equipo[0].players[0] ? equipo[0].players.map((jugador)=>{
                  return <Jugador jugador={jugador} key={nanoid()} addRemoveFavorite={addRemoveFavorite}/> 
                }): <p>Cargado...</p>}
            </div>
          </div>
        }
      </div>
    </div>
  )
}

const mapStateToProps=(state)=>{
  return{
    equipo: state.equipo
  }
}

function mapDispatchToProps(dispatch){
  return{
    getEquipo: async(idLiga,idEquipo)=>{await dispatch(getEquipo(idLiga,idEquipo))},
    addFavorite: async(objetoFavorite, nameFavorite)=>{await dispatch(addFavorite(objetoFavorite, nameFavorite))},
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailEquipo);