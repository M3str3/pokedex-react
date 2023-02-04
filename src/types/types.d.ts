export type Pokemon = {
    id:number
    name:string
    imgSrc:string
}

export type PokemonDetails = {
    name:string
    id:string
    imgSrc :string
    hp:number
    attack:number
    defense:number
    moves:moves[]
}

export type moves = {
    move:move
}

export type move = {
    name:string
    url:string
}