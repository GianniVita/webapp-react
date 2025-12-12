import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Movies Reviews App</h1>
                    <p className="col-md-8 fs-4">
                        Welcome to our movie reviews platform! Discover, review, and share your favorite films.
                    </p>
                    <Link to="/movies" className="btn btn-dark btn-lg">
                        Browse All Movies
                    </Link>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">🎬 Discover</h5>
                                <p className="card-text">Browse through our extensive collection of movie reviews.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">⭐ Review</h5>
                                <p className="card-text">Read detailed reviews and ratings from movie enthusiasts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">💬 Share</h5>
                                <p className="card-text">Share your thoughts and connect with other movie lovers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




