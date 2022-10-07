import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import {getSelecciones, addFavorite} from "../../redux/actions";
import Seleccion from "./Seleccion"
import "../../styles/components/selecciones.css";
import Pagination from "../Pagination"
import { nanoid } from 'nanoid'
import Loading from "../Loading"

const Selecciones = (props) => {
  useEffect(()=>{
      props.getSelecciones();
  },[])
  const addFavorite=(objetoSeleccion)=>{
    props.addFavorite(objetoSeleccion, "selecciones")
  }
  const [pagina,setPagina]=useState(1)
  const [porPagina,setPorPagina]=useState(23)
  const maximo=Math.ceil(props.selecciones.length/porPagina);
  
  return (
    <div className="divSelecciones">
      {props.selecciones.length<1 ? <Loading /> : 
          <Pagination pagina={pagina} 
                      setPagina={setPagina} 
                      maximo={maximo}
          />} 
      <div className="divGetSelecciones">
        {props.selecciones.length>1 && props.selecciones
              .slice((pagina-1)*porPagina, (pagina-1)*porPagina+porPagina)
              .map((seleccion)=>{
                if(seleccion.country_logo.length>0){
                  var exiteSeleccionFavorite=null;
                  if(props.favoriteSelecciones[0]){
                    exiteSeleccionFavorite=false;
                    props.favoriteSelecciones.map((favorite)=>{
                      if(favorite.idSeleccion===seleccion.country_id) exiteSeleccionFavorite=true;
                    })
                  }else{
                    exiteSeleccionFavorite=false
                  }
                  if(exiteSeleccionFavorite!==null){
                    return <Seleccion key={nanoid()} 
                            seleccion={seleccion} 
                            addFavorite={addFavorite}
                            exiteSeleccionFavorite={exiteSeleccionFavorite}/>
                    }
                }
          })
        }
      </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
      selecciones: state.selecciones,
      favoriteSelecciones: state.favoriteSelecciones
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
      getSelecciones: async()=>{await dispatch(getSelecciones())},
      addFavorite: async(objetoFavorite, nameFavorite)=>{
        await dispatch(addFavorite(objetoFavorite, nameFavorite))
      },
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Selecciones);