import React from 'react'

const Competicion = ({competicion, actionGetEquipos}) => {
  return (
    <div className="divCompeticion">
      <img src={competicion.league_logo} onClick={()=>{
        actionGetEquipos(competicion.league_id,competicion.league_name)}}/>
      <div>
        <p>{competicion.league_name} </p>
        <p>{competicion.league_season}</p>
      </div>
    </div>
  )
}

export default Competicion