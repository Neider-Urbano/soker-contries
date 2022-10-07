import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"
import { connect } from 'react-redux';
import { removeFavorite } from '../../redux/actions';
import {nanoid} from "nanoid"
import "../../styles/components/Favorites.css"
import SeleccionFavorite from './SeleccionFavorite';
import EquipoFavorite from './EquipoFavorite';

const Favorites = (props) => {
  const favorite=useParams();
  const removeFavoriteFunction=(idFavorite)=>{
    props.removeFavorite(idFavorite, favorite.nameFavorite)
  }

  return (
    <div className="componentFavorites">
      <div className="divTituloFavorites">
        <p>Mis {favorite.nameFavorite} 
              {favorite.nameFavorite==="selecciones" ? 
              " favoritas" : " favoritos"}
        </p>
      </div>
      <div className="divFavoritesInformacion">
        <div className="divTarjetaFovorite">
          {
            favorite.nameFavorite==="selecciones" && 
              props.favoriteSelecciones[0] ?
              props.favoriteSelecciones.map((seleccion)=>{
                return <SeleccionFavorite key={nanoid()} 
                          seleccion={seleccion}
                          removeFavoriteFunction={removeFavoriteFunction}/>
            })
            : null
          }
           {
            favorite.nameFavorite==="equipos" && props.favoriteEquipos[0] ?
            props.favoriteEquipos.map((equipo)=>{
              return <EquipoFavorite key={nanoid()}
                      equipo={equipo}
                      removeFavoriteFunction={removeFavoriteFunction}
              />
            })
            : null
          }
          {/*{
            favorite.nameFavorite==="jugadores" && props.favoriteJugadores[0] ?
            props.favoriteJugadores.map((jugador)=>{
              return <div key={nanoid()} className="divJugadorFavorite">
                <img src={jugador.srcJugador} alt=""/>
                <p>{jugador.nameJugador}</p>
              </div>
            })
            : null
          } */}
        </div>
      </div>
  </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    favoriteSelecciones: state.favoriteSelecciones,
    favoriteEquipos: state.favoriteEquipos,
    favoriteJugadores: state.favoriteJugadores
  }
}

function mapDispatchToProps(dispatch){
  return{
    removeFavorite: async(idFavorite, nameFovorite)=>{await dispatch(removeFavorite(idFavorite,nameFovorite))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Favorites); 