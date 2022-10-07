import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import favoritoActivo from "../../images/icons8-me-gusta-30 (1).png"
import favoritoDesactivo from "../../images/icons8-me-gusta-30.png"

const SeleccionFavorite = ({seleccion, removeFavoriteFunction}) => {

    const [activarFavorito,setActivarFavorito]=useState(true)

  return (
    <div className="divSeleccionFavorite">
         <Link to={`/seleccion/${seleccion.idSeleccion}`}>
             <img id="imgFavorite" src={seleccion.srcSeleccion} alt=""/>
         </Link>  
             <img src={activarFavorito ? favoritoActivo : favoritoDesactivo} 
                 alt="" className="imgFavorito"
                 onClick={()=>{
                    setActivarFavorito(false);
                    removeFavoriteFunction(seleccion.idSeleccion)}
                }
             />
         <div> 
             <p>{seleccion.nameSeleccion}</p>
         </div>
    </div>
  )
}

export default SeleccionFavorite