import HeroCard from '../components/HeroCard';
import { heroes_db } from '../data/heroes';

function Search() {

    const heroesFiltered = heroes_db.filter(heroe => heroe.superhero.toLocaleLowerCase().includes('green'))

    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <h4>Buscador</h4>
                    <hr />
                    <form>
                        <input
                            type="text"
                            placeholder="Encuentra tu héroe..."
                            className="form-control"
                            name="keyword"
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-dark mt-3 w-100"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-9">
                    <h4>Resultado</h4>
                    <hr />
                    <div className="row animate__animated animate__fadeIn">
                        {
                            heroesFiltered.map(hero => (
                                <HeroCard
                                    key={hero.id}
                                    {...hero}

                                />
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Search
