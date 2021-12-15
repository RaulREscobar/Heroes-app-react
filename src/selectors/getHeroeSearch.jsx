import { heroes_db } from "../data/heroes";

export const getHeroesBySearch = (keyword = "") => {
    if(keyword === "") {
        return []
    }
    return heroes_db.filter(heroe => heroe.superhero.toLowerCase().includes(keyword.toLowerCase()))
}