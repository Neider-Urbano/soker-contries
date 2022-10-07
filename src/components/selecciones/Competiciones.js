import React from 'react'
import iconoCompetecion from "../../images/icons8-copa-del-mundo-50.png"
import { nanoid } from 'nanoid'
import Competicion from "./Competicion"
import "../../styles/components/Competiciones.css"

const Competiciones = (props) => {
  return (
    <div className="divCompeticiones">
        <div className="divTituloCompetencias">
            <img src={iconoCompetecion} alt=""/>
            <p>Competiciones</p>
        </div>
        <div className="divCompeticionesInformacion">
            {
              props.seleccion.map((competicion)=>{
                return <Competicion key={nanoid()} 
                          competicion={competicion} 
                          actionGetEquipos={props.actionGetEquipos}/>
              })
            }
        </div>
    </div>
  )
}

export default Competiciones