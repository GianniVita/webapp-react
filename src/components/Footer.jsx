export default function Footer() {
    return (
        <footer className="bg-dark text-light mt-auto py-3">
            <div className="container">
                <div className="row align-items-center">
                    {/* Copyright Information */}
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} FilmApp. All rights reserved.
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-md-6 text-center text-md-end">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light me-3"
                            aria-label="Facebook">
                            <i className="bi bi-facebook fs-5"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light me-3"
                            aria-label="Twitter">
                            <i className="bi bi-twitter fs-5"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light me-3"
                            aria-label="Instagram">
                            <i className="bi bi-instagram fs-5"></i>
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light"
                            aria-label="YouTube">
                            <i className="bi bi-youtube fs-5"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

