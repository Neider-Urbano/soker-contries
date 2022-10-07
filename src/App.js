import {Routes,Route} from "react-router-dom"
import CrearUsuario from "./pages/CrearUsuario";
import LayoutSoccer from "./layouts/LayoutSoccer"
import Selecciones from "./components/selecciones/Selecciones";
import DetailSeleccion from "./components/selecciones/DetailSeleccion"
import DetailEquipo from "./components/equipos/DetailEquipo"
import DetailJugador from "./components/jugador/DetailJugador"
import {Provider} from "react-redux";
import store from "./redux/store"
import audioFondo from "./images/audios/0004664.mp3"
import Desarrollador from "./components/desarrollador/Desarrollador";
import Favorites from "./components/favorites/Favorites"
import CrearJugador from "./components/jugador/CrearJugador";

function App() {
  return (
    <Provider store={store}>
      <audio 
        src={audioFondo}
        id="audio"
        autoPlay
        loop
        />
      <Routes>
        <Route path="/" element={<CrearUsuario />}/>
        <Route exact path="/soccer" element={<LayoutSoccer><Selecciones/></LayoutSoccer>}/>
        <Route exact path="/seleccion/:id" element={<LayoutSoccer><DetailSeleccion/></LayoutSoccer>}/>
        <Route exact path="/equipo/:idEquipo/:idLiga" element={<LayoutSoccer><DetailEquipo/></LayoutSoccer>}/>
        <Route exact path="/jugador/:idJugador" element={<LayoutSoccer><DetailJugador/></LayoutSoccer>}/>
        <Route exact path="/favorite/:nameFavorite" element={<LayoutSoccer><Favorites/></LayoutSoccer>}/>
        <Route exact path="/jugadores/creados" element={<LayoutSoccer><CrearJugador/></LayoutSoccer>}/>
        <Route exact path="/desarrollador" element={<LayoutSoccer><Desarrollador/></LayoutSoccer>}/>
      </Routes>
    </Provider>
  );
}

export default App;
