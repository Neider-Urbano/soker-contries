import React from 'react'
import "../../styles/components/Desarrollador.css"
import iconoDesarrollador from "../../images/imgDesarrollador.png";

const Desarrollador = () => {
  return (
    <div className="divDetailDesarrollador"> 
        <div className="divGetInformacionDesarrollador">
            <img 
                src={iconoDesarrollador} 
                alt=""
            />
            <div className="divDetallesDesarrollador">
                <p><span>Nombre</span>
                    Neider Urbano
                </p>
                <p><span>Nacionalidad</span> 
                    Colombia
                </p>
                <p><span>Email</span> 
                    jjuly8julianur@gmail.com
                </p>
                <p><span>Profesión</span> 
                    Ingeniero de Sistemas
                </p>
                <p><span>Edad</span> 
                    21 años
                </p>
            </div>
        </div> 
    </div>
  )
}

export default Desarrollador