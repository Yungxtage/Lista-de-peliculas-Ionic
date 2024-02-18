export interface Pelicula{
    id: number,
    titulo: string,
    anio: number,
    sinopsis: string,
    director: string,
    portada: string
}

export interface Genero{
    id: number,
    genero: string,
}

export interface Actores{
    id: number,
    actor: string,
    foto: string
}