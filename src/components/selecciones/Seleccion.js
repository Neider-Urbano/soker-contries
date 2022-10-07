import React, {useState} from 'react'
import {Link} from "react-router-dom"
import "../../styles/components/seleccion.css"
import favoritoActivo from "../../images/icons8-me-gusta-30 (1).png"
import favoritoDesactivo from "../../images/icons8-me-gusta-30.png"

const Seleccion = ({seleccion,addFavorite, exiteSeleccionFavorite}) => {
  const [activarFavorito,setActivarFavorito]=useState(exiteSeleccionFavorite)
  const [clickFavorito,setClickFavorito]=useState(exiteSeleccionFavorite)
  var objetoSeleccionFavorita={
    idSeleccion:"",
    srcSeleccion:"",
    nameSeleccion:""
  }

  const cambiarSrc=(idSeleccion,srcSeleccion, nameSeleccion)=>{
    setClickFavorito(true);
    objetoSeleccionFavorita.idSeleccion=idSeleccion;
    objetoSeleccionFavorita.srcSeleccion=srcSeleccion;
    objetoSeleccionFavorita.nameSeleccion=nameSeleccion;
    if(clickFavorito===false) addFavorite(objetoSeleccionFavorita)
    setActivarFavorito(true)
  }

  const onMouseOver=()=>{
    if(!clickFavorito)setActivarFavorito(true)
  }
  const onMouseOut=()=>{
    if(!clickFavorito)setActivarFavorito(false)
  }
  
  return (
    <div className="divSelecion">
        <Link to={`/seleccion/${seleccion.country_id}`}>
            <img id="imgSeleccion" src={seleccion.country_logo} alt=""/>
        </Link>  
          <img src={activarFavorito ? favoritoActivo : favoritoDesactivo} 
                alt="" className="imgFavorito"
                onClick={()=>{cambiarSrc(seleccion.country_id,
                                        seleccion.country_logo,
                                        seleccion.country_name)}}
                onMouseOut={()=>{onMouseOut()}} 
                onMouseOver={()=>{onMouseOver()}}
                />
            <div> 
              <p>{seleccion.country_name}</p>
            </div>
    </div>
  );
}
export default Seleccion