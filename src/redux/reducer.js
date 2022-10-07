const initialState={
    selecciones:[],
    seleccion:[],
    equipos:[],
    equipo:[],
    jugador:[],
    favoriteJugadores:[],
    favoriteSelecciones:[],
    favoriteEquipos: []
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case "GET_SELECCIONES":
            return {
                ...state,
                selecciones: action.payload
            }
        case "GET_SELECCION":
            return{
                ...state,
                seleccion: action.payload
            }
        case "GET_EQUIPOS":
            return{
                ...state,
                equipos: action.payload
            }
        case "GET_EQUIPO":
            return{
                ...state,
                equipo: action.payload
            }
        case "GET_JUGADOR":
            return{
                ...state,
                jugador: action.payload
            }
        case "ADD_FAVORITE":
            if(action.payload.nameFavorite==="selecciones"){
                state.favoriteSelecciones.push(action.payload.objetoFavorite);
                return {
                    ...state,
                    favoriteSelecciones: state.favoriteSelecciones
                };
            }else if(action.payload.nameFavorite==="equipos"){
                state.favoriteEquipos.push(action.payload.objetoFavorite);
                return {
                    ...state,
                    favoriteEquipos: state.favoriteEquipos
                };
            }else{
                state.favoriteJugadores.push(action.payload.objetoFavorite);
                return {
                    ...state,
                    favoriteJugadores: state.favoriteJugadores
                };
            }
        case "REMOVE_FAVORITE":
            if(action.payload.nameFavorite==="selecciones"){
                return {
                    ...state,
                    favoriteSelecciones: state.favoriteSelecciones.filter((seleccion)=>{
                        if(seleccion.idSeleccion!==action.payload.idFavorite){
                            return seleccion
                        }})
                };
            }else if(action.payload.nameFavorite==="equipos"){
                return {
                    ...state,
                    favoriteEquipos: state.favoriteEquipos.filter((equipo)=>{
                        if(equipo.idEquipo!==action.payload.idFavorite){
                            return equipo
                        }})
                };
            }else{
                return {
                    ...state,
                    favoriteJugadores: state.favoriteJugadoresfilter((jugador)=>{
                        if(jugador.idJugador!==action.payload.idFavorite){
                            return jugador
                        }})
                };
            }
        default:
            return state;
    }
}

export default rootReducer;