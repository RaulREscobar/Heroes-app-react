
function HeroCard({ id, superhero, alter_ego, first_appearance, characters }) {
    return (
        <div className="col-12 col-md-6">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`./assets/heroes/${id}.jpg`} className="img-fluid rounded-start" alt={superhero} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters)
                                && <p className="card-text" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{characters}</p>
                            }
                            <p className="card-text">
                                <small className="card-muted">{first_appearance}</small>
                            </p>
                            <div className="mt-3">
                                <a
                                    href={`/hero/${id}`}
                                    className="btn btn-outline-dark btn-sm"
                                >
                                    more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroCard
