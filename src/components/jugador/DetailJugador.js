import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux/es/exports';
import { getJugador } from '../../redux/actions';
import {nanoid} from "nanoid"
import "../../styles/components/DetailJugador.css"
import Loading from "../Loading"

const DetailJugador = ({getJugador, jugador}) => {
  const params=useParams();
  useEffect(()=>{
    getJugador(params.idJugador)
  },[])
  return (
    <div className="divDetailJugador">
      {
        jugador[0] ? <div key={nanoid()} className="divGetInformacionJugador">
            <img src={jugador[0].player_image} alt=""/>
            <div className="divDetallesJugador">
              <p><span>Nombre</span> {jugador[0].player_name}</p>
              <p><span>Tipo de Jugador</span> {jugador[0].player_type}</p>
              <p><span>Minutos Jugados</span> {jugador[0].player_minutes}</p>
              <p><span>Equipos</span> {jugador[0].team_name}</p>
              <p><span>Edad</span> {jugador[0].player_age}</p>
            </div>
          </div> : <Loading />
      }
    </div>
  )
}

const mapStateToProps=(state)=>{
  return{
    jugador: state.jugador
  }
}

function mapDispatchToProps(dispatch){
  return{
    getJugador: (idJugador)=>dispatch(getJugador(idJugador)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailJugador)