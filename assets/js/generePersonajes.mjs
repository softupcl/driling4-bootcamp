import { renderizaPersonajes } from "./renderizaCards.mjs";
import { obtenerPersonajes } from "./starWarService.mjs";

async function* personajesPrincipales (inicio, fin, divPersonajes, clasePersonaje) {

    for (let i = inicio; i <= fin; i++) {
     
       const personajesPrincipales = await obtenerPersonajes(i);
       yield  renderizaPersonajes(personajesPrincipales, divPersonajes,clasePersonaje);
    }

    return 'Fin del ciclo'
}

export default personajesPrincipales