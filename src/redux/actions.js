function getSelecciones(){
    return function(dispatch){
        fetch("https://apiv3.apifootball.com/?action=get_countries&APIkey="+"da1a9fa1392fec5c7bf42aea293e785bf451fcf2f8968017634118abb12f3a57")
        .then((d)=>{return d.json()})
        .then((r)=>{
          return dispatch({type: "GET_SELECCIONES", payload: r})
        })
        .catch((err)=>{console.log(err)})
    }
}

function getSeleccion(id){
    return function(dispatch){
        fetch(`https://apiv3.apifootball.com/?action=get_leagues&country_id=${id}&APIkey=da1a9fa1392fec5c7bf42aea293e785bf451fcf2f8968017634118abb12f3a57`)
        .then((d)=>{return d.json()})
        .then((r)=>{
          return dispatch({type: "GET_SELECCION", payload: r})
        })
        .catch((err)=>{console.log(err)})
    }
}

function getEquipos(id){
    return function(dispatch){
        fetch("https://apiv3.apifootball.com/?action=get_teams&league_id="+id+"&APIkey=da1a9fa1392fec5c7bf42aea293e785bf451fcf2f8968017634118abb12f3a57")
        .then((d)=>{return d.json()})
        .then((r)=>{
            const datosEquipos=[];
            r.map((element)=>{
                const datoEquipo={};
                datoEquipo.team_badge=element.team_badge;
                datoEquipo.team_key=element.team_key;
                datoEquipo.team_name=element.team_name;
                datosEquipos.push(datoEquipo)
            })
            return dispatch({type:"GET_EQUIPOS", payload: datosEquipos})
        })
        .catch((err)=>{console.log(err)})
    }
}

function getEquipo(idLiga, idEquipo){
    return function(dispatch){
        fetch("https://apiv3.apifootball.com/?action=get_teams&league_id="+idLiga+"&team_id="+idEquipo+"&APIkey=da1a9fa1392fec5c7bf42aea293e785bf451fcf2f8968017634118abb12f3a57")
        .then((d)=>{return d.json()})
        .then((r)=>{
            return dispatch({type:"GET_EQUIPO", payload: r})
        })
        .catch((err)=>{console.log(err)})
    }
}

function getJugador(idJugador){
    return function(dispatch){
        fetch("https://apiv3.apifootball.com/?action=get_players&player_id="+idJugador+"&APIkey=da1a9fa1392fec5c7bf42aea293e785bf451fcf2f8968017634118abb12f3a57")
        .then((d)=>{return d.json()})
        .then((r)=>{
            return dispatch({type:"GET_JUGADOR", payload: r})
        })
        .catch((err)=>{console.log(err)})
    }
}

function addFavorite(objetoFavorite, nameFavorite){
    return {
        type: "ADD_FAVORITE", 
        payload: {"objetoFavorite": objetoFavorite,
                    "nameFavorite": nameFavorite
                }
    }
}

function removeFavorite(idFavorite, nameFavorite){
    return {
        type: "REMOVE_FAVORITE", 
        payload: {"idFavorite": idFavorite,
                    "nameFavorite": nameFavorite
                }
    }
}

module.exports={
    getSelecciones: getSelecciones,
    getSeleccion: getSeleccion,
    getEquipos: getEquipos,
    getEquipo: getEquipo,
    getJugador: getJugador,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
}