const abrirBtn = document.getElementById("abrirBtn");

const inicio = document.querySelector(".inicio");
const invitacion = document.getElementById("invitacion");

const aceptarBtn = document.getElementById("aceptarBtn");
const pensarBtn = document.getElementById("pensarBtn");

const confirmacion = document.getElementById("confirmacion");


/* --------------------------------
   ABRIR INVITACIÓN
-------------------------------- */

abrirBtn.addEventListener("click", () => {

    // Efecto de salida
    inicio.classList.add("desaparecer");

    setTimeout(() => {

        inicio.style.display = "none";

        invitacion.style.display = "block";

        // Efecto de entrada
        invitacion.classList.add("entrada-boleto");

    }, 700);

});


/* --------------------------------
   ACEPTAR INVITACIÓN
-------------------------------- */

aceptarBtn.addEventListener("click", () => {

    aceptarBtn.classList.add("boton-presionado");

    // 🍿 Salen las palomitas
    crearPalomitas();

    // Esperamos mientras suben
    setTimeout(() => {

        // Oscurecer pantalla
        document.body.classList.add("transicion-cine");

    }, 900);


    // Después aparece la confirmación
    setTimeout(() => {

        invitacion.style.display = "none";

        confirmacion.style.display = "block";

        confirmacion.classList.add("entrada-confirmacion");

        document.body.classList.remove("transicion-cine");

    }, 2200);

});


/* --------------------------------
   "DÉJAME PENSARLO"
-------------------------------- */

pensarBtn.addEventListener("click", () => {

    pensarBtn.classList.add("boton-presionado");

    setTimeout(() => {

        mostrarMensajePensarlo();

    }, 400);

});


/* --------------------------------
   CREAR PALOMITAS
-------------------------------- */

function crearPalomitas() {

    for (let i = 0; i < 12; i++) {

        const palomita = document.createElement("div");

        palomita.classList.add("palomita-flotante");

        palomita.innerHTML = "🍿";

        palomita.style.left =
            Math.random() * 100 + "vw";

        palomita.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        document.body.appendChild(palomita);

        setTimeout(() => {

            palomita.remove();

        }, 4000);

    }

}


/* --------------------------------
   MENSAJE "PENSARLO"
-------------------------------- */

function mostrarMensajePensarlo() {

    const mensaje = document.createElement("div");

    mensaje.classList.add("mensaje-overlay");

    mensaje.innerHTML = `

        <div class="mensaje-card">

            <div class="mensaje-icono">
                🎬
            </div>

            <h2>Está bien 😌</h2>

            <p>
                No hay afán.
                <br>
                La invitación queda por aquí.
            </p>

            <button id="volverBtn">
                Volver a la invitación
            </button>

        </div>

    `;

    document.body.appendChild(mensaje);


    const volverBtn =
        document.getElementById("volverBtn");


    volverBtn.addEventListener("click", () => {

        mensaje.classList.add("cerrar-mensaje");

        setTimeout(() => {

            mensaje.remove();

        }, 500);

    });

}