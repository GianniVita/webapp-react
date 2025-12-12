import { Link } from 'react-router-dom';

const footerMenus = [
    {
        title: 'Menu',
        links: [
            {
                id: 1,
                text: 'Home',
                link: '/'
            },
            {
                id: 2,
                text: 'Movies',
                link: '/movies'
            },
            {
                id: 3,
                text: 'Contact',
                link: '/contacts'
            }
        ]
    },
    {
        title: 'Admin',
        links: [
            {
                id: 1,
                text: 'Dashboard',
                link: '/admin'
            },
            {
                id: 2,
                text: 'Create Movie',
                link: '/admin/movies/create'
            }
        ]
    },
    {
        title: 'Legal',
        links: [
            {
                id: 1,
                text: 'Privacy Policy',
                link: '#'
            },
            {
                id: 2,
                text: 'Terms and Conditions',
                link: '#'
            }
        ]
    },
]


export default function Footer() {
    return (
        <footer className="bg-dark text-light mt-auto py-4">
            <div className="container">
                <div className="row">
                    {/* Dynamic Footer Menus */}
                    {footerMenus.map((menu, index) => (
                        <div className="col-md-3 mb-3" key={index}>
                            <h5 className="text-uppercase mb-3">{menu.title}</h5>
                            <ul className="list-unstyled">
                                {menu.links.map((link) => (
                                    <li className="mb-2" key={link.id}>
                                        <Link to={link.link} className="text-light text-decoration-none">
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Social Media Links */}
                    <div className="col-md-3 mb-3">
                        <h5 className="text-uppercase mb-3">Follow Us</h5>
                        <div>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-light me-3"
                                aria-label="Facebook">
                                <i className="bi bi-facebook fs-4"></i>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-light me-3"
                                aria-label="Instagram">
                                <i className="bi bi-instagram fs-4"></i>
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-light"
                                aria-label="YouTube">
                                <i className="bi bi-youtube fs-4"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <hr className="bg-light" />
                <div className="row">
                    <div className="col text-center">
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} FilmApp. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

