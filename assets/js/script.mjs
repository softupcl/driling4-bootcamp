import personajesPrincipales from "./generePersonajes.mjs";

const divSecundarios = document.querySelector('#secundarios');
const divOtros = document.querySelector('#otros');
const divPopulares = document.querySelector('#populares');

let generaPersonajes =  personajesPrincipales(1,5, divPopulares, "timeline-icon" );
let generaPersonajesSecundarios =  personajesPrincipales(6,10, divSecundarios, "timeline-icon1");
let generaOtrosPersonajes =  personajesPrincipales(11,15, divOtros, "timeline-icon2");


divPopulares.addEventListener('mouseenter', async()=>{
    generaPersonajes.next();
})

divSecundarios.addEventListener('mouseenter',()=>{
    generaPersonajesSecundarios.next();
    
})

divOtros.addEventListener('mouseenter',()=>{
    generaOtrosPersonajes.next();
})