import React,{useState} from 'react'
import "../styles/components/Pagination.css";
import iconoSearch from "../images/icons8-search-64.png"

const Pagination = ({pagina, setPagina, maximo}) => {
    const [valuePagina,setValuePagina]=useState(1)
    const nextPagina=()=>{
        setValuePagina(Math.ceil(valuePagina)+1)
        setPagina(Math.ceil(pagina)+1)
    }
    const previousPagina=()=>{
      setValuePagina(Math.ceil(valuePagina)-1)
      setPagina(Math.ceil(pagina)-1)
    }

    const onKeyDown=(e)=>{
      var {value}=e.target;
      if(e.keyCode==13 && pagina !==null){
        if(
          parseInt(value)<1  || 
          parseInt(value)>Math.ceil(maximo) || 
          isNaN(parseInt(value))
        ){
          setPagina(1); setValuePagina(1)
        }else{
          setPagina(parseInt(value))
        }
      }
    }
    const onChange=(e)=>{
      if(pagina!==null)setValuePagina(e.target.value)
    }
  return (
    <div className="divOpcionesPagination">
        <div className="divPagination">
          <input type="button" className="inputFlecha" 
            value="<" onClick={()=>{
                        if(pagina!==null) previousPagina();
                      }} 
              disabled={pagina===1 || pagina<1}
          />
          <div className="inputPaginaActual">
            <input type="number" 
              placeholder="No"
              onKeyDown={(e)=>{onKeyDown(e)}}
              min="0"
              value={valuePagina}
              onChange={(e)=>{onChange(e)}}
            />
            <p>de {Math.ceil(maximo)}</p>
          </div>
          <input type="button" className="inputFlecha" 
              value=">" onClick={()=>{
                if(pagina!==null) nextPagina();
              }} disabled={pagina===Math.ceil(maximo) 
              || pagina>Math.ceil(maximo)}
          />   
        </div> 

        <div className="divInputBusqueda">
            <input type="text" placeholder="Buscar..."/>
            <img src={iconoSearch}/>
        </div>
    </div>
  )
}

export default Pagination