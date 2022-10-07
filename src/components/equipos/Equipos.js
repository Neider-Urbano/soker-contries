import React from 'react'
import Loading from '../Loading'
import { nanoid } from 'nanoid'
import Equipo from "./Equipo"
import "../../styles/components/Equipos.css"
import iconoEquipos from "../../images/icons8-escudo-24.png"
import { connect } from 'react-redux'
import { addFavorite } from 'redux/actions'

const Equipos = (props) => {
  const addFavoriteEquipo=(objetoEquipo, booleanClickFavorito)=>{
    if(booleanClickFavorito){
      props.removeFavorite(objetoEquipo.idSeleccion, "equipos")
    }else{
      props.addFavorite(objetoEquipo, "equipos")
    }
  }
  return (
    <div className="divEquipos">
        <div className="divTituloEquipos">
          <img src={iconoEquipos} alt=""/>
            <p>{props.nameCompeticion ? `Equipos de la Competición ${props.nameCompeticion}` : "¡ Click en alguna Competición para ver equipos !"}</p>
        </div>
        {props.activarCargando===false && <Loading />}
        { props.activarCargando===true && 
          <div className="divGetEquipos">
            {
              props.equipos.length>1 && 
              props.equipos.map((equipo)=>{
                var existeEquipoFavorite=null;
                if(props.favoriteEquipos[0]){
                  existeEquipoFavorite=false;
                  props.favoriteEquipos.map((favorite)=>{
                    if(favorite.idEquipo===equipo.team_key) existeEquipoFavorite=true;
                  })
                }else{
                  existeEquipoFavorite=false
                }
                if(existeEquipoFavorite!==null){
                  return <Equipo key={nanoid()} 
                          equipo={equipo} 
                          idCompeticion={props.idCompeticion}
                          addFavoriteEquipo={addFavoriteEquipo}
                          existeEquipoFavorite={existeEquipoFavorite}
                  />
                }
              })
            }
          </div>
        }
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    favoriteEquipos: state.favoriteEquipos
  }
}

function mapDispatchToProps(dispatch){
  return{
    addFavorite: async(objetoFavorite, nameFavorite)=>{
      await dispatch(addFavorite(objetoFavorite, nameFavorite))
    },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Equipos);