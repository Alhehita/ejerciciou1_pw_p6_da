document.addEventListener("DOMContentLoaded", function () {
    let puntaje = 0;
    let intentos = 0;
  
    const puntajeE = document.querySelector(".puntaje");
    const intentosE = document.querySelector(".intentos");
    const mensajeE = document.querySelector(".mensaje");
  
    const botones = document.querySelectorAll(".botones button");
  
    const seleccionarOpcion = (event) => {
      intentos++;
      intentosE.textContent = ` ${intentos}`;
  
      if (event.target.classList.contains("correcto")) {
        mensajeE.style.backgroundColor = "blue";
        mensajeE.style.border = "1px solid black";
        mensajeE.style.fontFamily = "'Times New Roman', Times, serif";
        document.querySelector("img").src = "..//img/pcolor.jpg";
  
        switch (intentos) {
          case 1:
            puntaje += 5;
            break;
          case 2:
            puntaje += 3;
            break;
          case 3:
            puntaje += 1;
            break;
          default:
            break;
        }
        puntajeE.textContent = ` ${puntaje}`;
        mensajeE.innerHTML =
          "<br>Felicitaciones, has seleccionado la opción correcta";
        event.target.disabled = true;
      }
  
      if (event.target.classList.contains("incorrecto")) {
        mensajeE.innerHTML = "<br>Pokémon incorrecto, intentalo nuevamente ";
        mensajeE.style.backgroundColor = "";
        mensajeE.style.border = "none";
  
      
      }
  
      if (intentos === 3 && !event.target.classList.contains("correcto")) {
        reiniciarJuego();
        
        document.querySelector("img").src = "..//img/pnegro.jpg";

      }
    };
  
    const reiniciarJuego = () => {
      intentos = 0;
      puntaje = 0;
      puntajeE.textContent = `${puntaje}`;
      intentosE.textContent = `${intentos}`;
      mensajeE.textContent = "";
      mensajeE.style.border = "none";
  
      for (let boton of botones) {
        boton.disabled = false;
      }
    };
  
    for (let boton of botones) {
      boton.addEventListener("click", seleccionarOpcion);
    }
  
    document
      .querySelector(".reiniciar")
      .addEventListener("click", reiniciarJuego);
  });
  
  