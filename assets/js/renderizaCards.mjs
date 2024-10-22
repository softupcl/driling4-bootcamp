export const renderizaPersonajes = (personaje, divPersonajes, clase) => {
    const personajes= `
     <div  class="col-12 col-md-6 col-lg-4">
        <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
            <div class=${clase}></div>
                <div class="timeline-text">
                    <h6>${personaje.name}</h6>
                    <p>Estatura: ${personaje.height} cm. - Peso: ${personaje.mass} kg.</p>
                </div>
            </div>
     </div>`

     divPersonajes.parentNode.insertAdjacentHTML('beforeend',personajes) 
}

