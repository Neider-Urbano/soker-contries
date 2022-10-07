import React,{useEffect, useState} from 'react'
import { connect } from "react-redux";
import {getSeleccion,getEquipos, addFavorite} from "../../redux/actions";
import { useParams } from 'react-router-dom';
import "../../styles/components/DetailSeleccion.css"
import { nanoid } from 'nanoid'
import Pagination from "../Pagination"
import Loading from "../Loading" 
import Competiciones from "../selecciones/Competiciones"
import Equipos from '../equipos/Equipos';

const DetailSeleccion = (props) => {
    const {id} = useParams();
    const [idCompeticion,setIdCompeticion]=useState(0);
    const [nameCompeticion,setNameCompeticion]=useState("");
    const [activarCargando,setActivarCargando]=useState(null)
    useEffect(()=>{
        props.getSeleccion(id);
        if(props.equipos.length>0){
          setActivarCargando(true)
        }
    },[props.equipos])

    const actionGetEquipos=async(idLiga, nameLiga)=>{
        setActivarCargando(false)
        setIdCompeticion(idLiga);
        setNameCompeticion(nameLiga);
        await props.getEquipos(idLiga);
    }

  return (
    <div className="divDetailSeleccion">
      
      {!props.seleccion[0] ? <Loading /> : <Pagination pagina={null} setPagina={null} maximo={0}/>}
      <div className="divSeleccionCompeticion">
        <div className="divInformacionSeleccion">
          {
            props.seleccion[0] && 
              <div key={nanoid()}>
                <img src={props.seleccion[0].country_logo}/>
                <p>{props.seleccion[0].country_name}</p>
              </div>
          }
        </div>
        <div className="divCompeticionEquipo">
          {
                props.seleccion.length>1 && 
                <Competiciones 
                  seleccion={props.seleccion} 
                  actionGetEquipos={actionGetEquipos} />
          }
          {
            props.seleccion[0] && <Equipos equipos={props.equipos} 
              activarCargando={activarCargando}
              idCompeticion={idCompeticion}
              nameCompeticion={nameCompeticion}
            />
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
      seleccion: state.seleccion,
      equipos: state.equipos
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
      getSeleccion: async(id)=>{await dispatch(getSeleccion(id))},
      getEquipos: async(id)=>{await dispatch(getEquipos(id))},
      addFavorite: async(objetoFavorite, nameFavorite)=>{await dispatch(addFavorite(objetoFavorite, nameFavorite))}
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(DetailSeleccion);