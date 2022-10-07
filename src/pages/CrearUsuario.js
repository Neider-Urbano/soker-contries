import React, { useRef, useState, useEffect } from 'react';
import "../styles/pages/CrearUsuario.css";
import videoFondo from "../images/fondos/pexels-tima-miroshnichenko-6077699.mp4"
const CrearUsuario = () => {
    const nameUserRef=useRef(null);
    const [state, setState]=useState({
        nameUser: "", errors: ""
    });
    const handleNameUser=(e)=>{
        var {name,value}=e.target;
        setState((state)=>({
            ...state, [name]:value, errors: validarNameUser(e.target.value)
        }));
    }
    const crearUsuarioLocalStorage=(e)=>{
        var {name,value}=nameUserRef.current;
        if(state.errors.length=="" && value!=="" ){
            e.target.disabled=true;
            const miStorage = window.localStorage;
            miStorage.clear();
            miStorage.setItem('nameUser', value);
            alert("Usuario creado con exito")
            window.location="/soccer"
            e.target.disabled=false;
        }else{
            setState((state)=>({
                ...state,[name]:value,errors: validarNameUser(nameUserRef.current.value)
            }));
        }   
    }
    const validarNameUser=(value)=>{
        var error="";
        if(value.length<1){
            error="*Usuario requerido";
        }
        else if(!(/^[aA-z0-9]{5,9}$/).test(value)){
            error="*Entre 5-9 caracteres ";
        }
        return error;
    }
    useEffect(()=>{
    },[])
  return (
    <div className='bodyCrearUsuario'>
        <video src={videoFondo} 
            autoPlay muted loop
        />
        <div className="divLogin">
            <p className="pCreateUsuario">¡Create un Usuario!</p>
            <input type="text" ref={nameUserRef} placeholder='Nombre de Usuario' name="nameUser" 
                className="inputName"
                value={state.nameUser}  
                onChange={(e)=>{handleNameUser(e); 
                }}
            />
            {state.errors.length>1 && <span>{state.errors}</span>}
            <input type="button" value="Crear" 
                className="inputCrear"
                onClick={(e)=>{
                crearUsuarioLocalStorage(e);
            }}/>
        </div>
    </div>
  )
}

export default CrearUsuario