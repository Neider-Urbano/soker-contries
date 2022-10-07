function CerrarSesion(){
    const miStorage = window.localStorage;
    if(miStorage.nameUser){
        miStorage.clear();
        alert("Sesión Finalizada")
        window.location="/";
    }
}

export default CerrarSesion;