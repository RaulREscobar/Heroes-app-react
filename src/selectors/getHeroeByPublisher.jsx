import { heroes_db } from "../data/heroes";

export const getHeroeByPublisher = (publisher) => heroes_db.find(heroe => heroe.publisher === publisher)
