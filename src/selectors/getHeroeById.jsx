import { heroes_db } from "../data/heroes";

export const getHeroeById = id => heroes_db.find(heroe => heroe.id === id)
