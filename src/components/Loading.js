import React from 'react'
import "../styles/components/Loading.css"
const Loading = () => {
  return (
    <div className="divCargando">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>cargando...</p>
    </div>
  )
}

export default Loading