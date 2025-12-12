import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <div className="error-content">
                        <h1 className="display-1 fw-bold text-primary">404</h1>
                        <h2 className="mb-4">Page Not Found</h2>
                        <p className="lead mb-4">
                            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                        </p>
                        <div className="d-flex gap-3 justify-content-center">
                            <Link to="/" className="btn btn-primary btn-lg">
                                <i className="bi bi-house-door me-2"></i>
                                Go Home
                            </Link>
                            <Link to="/movies" className="btn btn-outline-primary btn-lg">
                                <i className="bi bi-film me-2"></i>
                                Browse Movies
                            </Link>
                        </div>
                    </div>
                    <div className="mt-5">
                        <i className="bi bi-film-reel text-muted" style={{ fontSize: '120px' }}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
