import React from 'react'
import Nav from "../components/Nav";
import videoFondo from "../images/fondos/pexels-tima-miroshnichenko-6077722.mp4"
import "../styles/layouts/layoutPublic.css"
const LayoutSoccer = ({children}) => {
  return (
    <div className="bodySoccer">
        <video src={videoFondo} 
            autoPlay muted loop
        />
        <section className="sectionSoccer">
          <Nav />
          <div className="asideChildren">
            {children}
          </div>
        </section>
    </div>
  )
}

export default LayoutSoccer;