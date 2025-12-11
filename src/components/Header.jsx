import { NavLink } from 'react-router-dom';

export default function Header() {
    return (

            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <div className="container-fluid">
                    {/* Logo/Brand */}
                <a className="navbar-brand" href="/">
                    <i className="bi bi-film me-2"></i>
                    FilmApp
                </a>

                {/* Hamburger toggle button for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <i className="bi bi-house-door me-1"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contacts">
                                <i className="bi bi-envelope me-1"></i>
                                Contacts
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
