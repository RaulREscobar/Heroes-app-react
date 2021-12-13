import { heroes_db } from "../data/heroes";


function Heroe() {

    const { id: heroeId, superhero, publisher, alter_ego, first_appearance, characters} = heroes_db.find(heroe => heroe.id === "dc-batman");

    return (
        <div className="row mt-4  animate__animated animate__fadeIn">
            <div className="col-4">
                <img 
                    src={`./assets/heroes/${heroeId}.jpg`} 
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b> {publisher}</li>
                    <li className="list-group-item"><b>Fist appearence: </b> {first_appearance}</li>
                </ul>
                <hr/>
                <h4>Characters</h4>
                <p>{characters}</p>
                <button
                    className="btn btn-outline-dark"
                >
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default Heroe
