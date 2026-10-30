function botonPulsado(){
    console.log("Boton pulsado - funcion");
    document.body.style.backgroundColor="red";
}
function desactivarEvento(){
    let btn = document.getElementById("btnPulsame")
    btn.removeEventListener("click", botonPulsado);
}


//Selecciono el boton
let btn = document.getElementById("btnPulsame");
btn.addEventListener("click", botonPulsado);
btn.addEventListener("mouseover", ()=>console.log("encima"));


let btnDescativar = document.getElementById("btnDesactivar");
btnDescativar.addEventListener("click",desactivarEvento)