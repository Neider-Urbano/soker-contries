import React from 'react'
import "../../styles/components/CrearJugador.css"

const CrearJugador = () => {
  return (
    <div className="divCrearJugador">
      <div className="divTituloCrearJugador">
        <p>Ingresar datos del Jugador</p>
      </div>
      <div className="divDatosJugador">
        <div>
          <div><img src="" alt=""/></div>
          <div><img src="" alt=""/></div>
          <div><img src="" alt=""/></div>
          <div><img src="" alt=""/></div>
        </div>
        <div>
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Nacionalidad"/>
          <input type="text" placeholder="Equipo"/>
          <input type="text" placeholder="Edad"/>
          <select>
            <option>Posición</option>
            <option>Arquero</option>
            <option>Defensa</option>
            <option>Medio Campista</option>
            <option>Volante</option>
            <option>Lateral</option>
            <option>Delantero</option>
          </select>
          <input type="text" placeholder="Estatura cm"/>
          <input type="text" placeholder="Peso kg"/>
        </div>
      </div>
      <div className="divBotonCrear">
        <input type="button" value="Crear"/>
      </div>
    </div>
  )
}

export default CrearJugador