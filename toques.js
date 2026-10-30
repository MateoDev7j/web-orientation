let caja = document.getElementById("caja");
var offsetX, offsetY; 
caja.addEventListener("touchstart",(e)=>{
    e.preventDefault();
    console.log("tocas el div");
    caja.style.backgroundColor="green";
    offsetX=e.touches[0].clientX - caja.offsetLeft;
    offsetY=e.touches[0].clientY - caja.offsetTop;
});
caja.addEventListener("touchend",(e)=>{
    e.preventDefault();
    console.log("levantas el dedo");
    caja.style.backgroundColor="blue";
});
caja.addEventListener("touchmove",(e)=>{
    let toque = e.touches[0];
    
    console.log("x= "+toque.clientX + " Y= " + toque.clientY);
    caja.style.top=toque.clientY-offsetY+"px";
    caja.style.left=toque.clientX-offsetX+"px";
});
/*window.addEventListener("touchmove",(e)=>{
    let toque = e.touches[0];
    console.log("x= "+toque.clientX + " Y= " + toque.clientY);
    caja.style.top=toque.clientY+"px";
    caja.style.left=toque.clientX+"px";
    caja.style.margin="0px";
    
});*/
var startX, startY;
let span = document.getElementById("detectarMovimiento");
let caja2 = document.getElementById("caja2");
caja2.addEventListener("touchstart",(e)=>{
    e.preventDefault();
    console.log("tocas el div");
    caja2.style.backgroundColor="green";
    startX=e.touches[0].clientX;
    startY=e.touches[0].clientY;
});
caja2.addEventListener("touchend",(e)=>{
    e.preventDefault();
    console.log("levantas el dedo");
    caja2.style.backgroundColor="blue";
    let endX=e.changedTouches[0].clientX;
    let endY=e.changedTouches[0].clientY;

    let diffX = endX - startX;
    let diffY = endY - startY;

    if(diffX >50){
        span.innerHTML= 'Derecha';
    }
    if(diffX < -50){
        span.innerHTML= 'Izquierda';
    }
    if(diffY > 50){
        span.innerHTML= 'Abajo';
    }
    if(diffY < -50){
        span.innerHTML= 'Arriba';
    }

});

//4. Pinch to Zoom (Multi-touch)
//Crea un contenedor con una imagen. Detecta cuando el usuario toca la pantalla 
//con dos dedos comprobando que e.touches.length === 2. Calcula la distancia entre 
//ambos puntos en tiempo real durante el evento touchmove. Si la distancia aumenta 
//respecto al toque inicial, aplica una propiedad CSS transform: scale() 
//para agrandar la imagen; si disminuye, redúcela.





//Nivel Avanzado
//5. Toque Prolongado y Doble Toque (Gestos de tiempo)
//Crea un botón en pantalla que responda a interacciones basadas en tiempo:
//Doble Toque: Si lo tocas dos veces en menos de 300 milisegundos, cambia su forma a un círculo.
//Toque Prolongado (Long Press): Si mantienes el dedo presionado sobre él durante más de 1 segundo sin moverlo, haz que aparezca un menú contextual oculto.
//Pista: Deberás gestionar temporizadores usando setTimeout al inicio del toque y cancelarlos con clearTimeout en los eventos touchend o touchmove.



//6. Carrusel Magnético (Deslizamiento continuo)
//Crea una fila horizontal de tarjetas que desborde el ancho de la pantalla. Usa touchstart y touchmove para mover el contenedor hacia los lados siguiendo el dedo del usuario. Al soltar (touchend), calcula la posición actual y aplica una transición CSS para que la tarjeta más cercana se deslice automáticamente hasta el centro de la pantalla (efecto snap), imitando el comportamiento nativo de las galerías móviles.




//7. Zonas de Caída (Touch Drag & Drop)
//Dibuja un círculo arrastrable y dos "cajas" vacías en diferentes partes de la pantalla. Arrastra el círculo con touchmove. El reto principal ocurre en el touchend: a diferencia del ratón, los eventos de toque no detectan por defecto sobre qué elemento estás soltando el dedo.
//Pista: Deberás usar el método document.elementFromPoint(x, y) pasándole las coordenadas del toque final para detectar si debajo hay una caja en ese instante exacto, y si es así, acoplar el círculo en su interior.






/******************************************************/
window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;
  // Do stuff...
}
// 1. Cambiamos la función para que use 'mostrarOrientacion' que es la que escribe en tu HTML
function onClick() {
  // Para orientación en iOS 13+, se debe pedir permiso específicamente a DeviceOrientationEvent
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
      .then((state) => {
        if (state === 'granted') {
          window.addEventListener('deviceorientation', mostrarOrientacion);
        } else {
          console.error('El permiso para acceder a la orientación fue rechazado');
        }
      })
      .catch(console.error);
  } else {
    // Dispositivos que no son iOS 13+ (Android y navegadores de escritorio compatibles)
    window.addEventListener('deviceorientation', mostrarOrientacion);
  }
}

// 2. Esta función recibe el evento de orientación y actualiza tu DIV
function mostrarOrientacion(e) {
  // Validamos que los valores existan antes de pintar (algunos navegadores de PC devuelven null)
  const alpha = e.alpha;
  const beta = e.beta;
  
  document.getElementById("contenedor-orientacion").innerHTML = alpha + " - " + beta;
}

// 3. Asignamos el evento de clic al contenedor para activar los permisos
document.getElementById("contenedor-orientacion").addEventListener("click", onClick);
