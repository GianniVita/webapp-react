import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function MoviePage() {

    const { id } = useParams();
    const [movie, setMovies] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(response => {
                console.log(response);
                setMovies(response.data)
            })
            .catch(error => {
                console.error("There was an error fetching the movie data!", error);
            });
    }, [id]);

    if (!movie) {
        return <div className="container my-5 text-center">Loading...</div>
    }

    return (

        <div className="container my-5">
            <div className="d-flex align-items-center gap-4 p-4">
                <img src={`/images/movies/${movie.image}`} alt={movie.title} className="img-fluid" style={{ maxWidth: '300px' }} />

                <div className="movie_details">
                    <h3 className="">
                        {movie.title}
                    </h3>
                    <div><i className="bi bi-camera-reels"></i> Director: <strong>{movie.director}</strong></div>
                    <p>{movie.abstract}</p>
                </div>
            </div>

            <hr />

            <section id="reviewsList">
                <div className="container">
                    <h3 className="mb-4">Reviews</h3>

                    {movie.reviews.map(review =>

                        <div className="card p-3 mb-3" key={review.id}>
                            <strong>{review.name}</strong>
                            <p>
                                {review.text}
                            </p>
                            <div className="vote">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                        </div>



                    )}
                    
                    </div>
            </section>
        </div>

    )
}
