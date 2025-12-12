import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"

export default function MoviePage() {

    const {id} = useParams();
    const [movie, setMovies] = useState();




    useEffect(() => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(response => {
                console.log(response);
                setMovies(response.data)
            })
            .catch(error => {
                console.error("There was an error fetching the movie data!", error);
            });    
    }, []);

    return(

        <div>
            <img src={`/images/movies/${movie?.image}`} alt={movie.title}className=""/>
            
                <h3 className="">
                    {movie?.title}
                </h3>
                <p>{movie?.abstract}</p>
        </div>
    )
}