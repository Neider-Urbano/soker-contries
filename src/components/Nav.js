import React, {useState, useEffect} from 'react'
import "../styles/components/nav.css"
import iconoSoker from "../images/pennant.png"
import iconoUser from "../images/soccer-player.png"
import CerrarSesion from "../functions/CerrarSesion"
import Aside from "../components/Aside"
import { useParams } from 'react-router-dom'

const Nav = () => {
    const miStorage = window.localStorage;
    var clickAside;
    const params=useParams();
    const [clickMenuAside, setClickMenuAside]=useState(false)
    
    const activeLi=(e)=>{
        setClickMenuAside(true);
        clickAside.forEach((li)=>{
        li.classList.remove("active")
        })
        var liActive=e.target.parentNode;
        liActive.classList.add("active")
    }

    useEffect(()=>{
        clickAside=document.querySelectorAll(".asideSoccer ul li")
        if(!clickMenuAside){
        clickAside[0] && clickAside.forEach((li)=>{
            var parametro="";
            if(params.nameFavorite){
            parametro=params.nameFavorite
            }else{
            if(window.location.pathname==="/soccer"){
                parametro="soccer"
            }else if(window.location.pathname==="/desarrollador"){
                parametro="desarrollador"
            }else{
                parametro="creados"
            }
            }
            if(li.classList[0].includes(parametro)){
                li.firstElementChild.click();
            }
        })
        }
    })

    return (
        <nav> 
            <div className="divIconoSoker" onClick={()=>{
                    var menuAsideHome=document.querySelector(".soccer").firstElementChild;
                    menuAsideHome.click();
                }}>
                <img src={iconoSoker} alt=""/>
                <p>SOKER</p>
            </div>
            <div className="divAside">
                <Aside activeLi={activeLi}/>
            </div>
            <div className="divIconoUser">
                <img src={iconoUser} alt=""/>
                <div>
                    <p className="pNameUser">{miStorage.getItem("nameUser")}</p>
                    <p className="pCerrarSesion" onClick={()=>{CerrarSesion()}}>cerrar sesión</p>
                </div>
            </div>
        </nav>
    )
}

export default Nav