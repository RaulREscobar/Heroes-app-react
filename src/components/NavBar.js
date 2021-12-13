export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">

            <a
                className="navbar-brand"
                href="/"
            >
                HeroApp
            </a>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <a
                        activeclassname="active"
                        className="nav-item nav-link"
                        href="/marvel"
                    >
                        Marvel
                    </a>

                    <a
                        activeclassname="active"
                        className="nav-item nav-link"
                        href="/dc"
                    >
                        DC
                    </a>
                    <a
                        activeclassname="active"
                        className="nav-item nav-link"
                        href="/search"
                    >
                        Search
                    </a>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <p className="nav-item nav-link text-info mb-0">
                        Usuario
                    </p>
                    <a
                        className="nav-item nav-link border-0 bg-transparent"
                        href="/login"
                    >
                        Logout
                    </a>
                </ul>
            </div>



        </nav>
    )
}
