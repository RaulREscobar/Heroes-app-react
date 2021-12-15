import {Link, NavLink} from 'react-router-dom'
export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">

            <Link
                className="navbar-brand"
                to="/"
            >
                HeroApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeclassname="active"
                        className="nav-item nav-link"
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeclassname="active"
                        className="nav-item nav-link"
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        activeclassname="active"
                        className="nav-item nav-link"
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <p className="nav-item nav-link text-info mb-0">
                        Usuario
                    </p>
                    <button
                        className="nav-item nav-link border-0 bg-transparent"
                        to="/login"
                    >
                        Logout
                    </button>
                </ul>
            </div>



        </nav>
    )
}
