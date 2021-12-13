import {heroes_db} from '../data/heroes';
import HeroCard from './HeroCard';

function HeroesList({ publisher }) {

    const heroes = heroes_db.filter(heroe => heroe.publisher === publisher);

    return (
        <div className="row animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}

export default HeroesList
