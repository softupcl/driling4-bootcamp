export const obtenerPersonajes = async(id) => {

    const resp = await fetch(`https://swapi.dev/api/people/${id}`)
    const data = await resp.json();
    return data;
}

