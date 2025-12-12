import { Link } from "react-router-dom";

export default function SingleMovieCard({ movie }) {

    return (

        <div className="col" key={movie.id}>
            <div className="card h-100">
                <img
                    src={`/images/movies/${movie.image}`}
                    alt={movie.title}
                    className="card-img-top"
                />
                <div className="card-body">
                    <h3 className="card-title">
                        {movie.title}
                    </h3>
                    <p>{movie.abstract}</p>
                    <Link to={`/movies/${movie.id}`} className="btn btn-dark">
                    More Details 
                    </Link>
                </div>
            </div>

        </div>


    )
}