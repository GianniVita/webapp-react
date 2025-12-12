import { useParams } from "react-router-dom"

export default function MoviePage() {

    const {id} = useParams();

    return(

        <div>
            <img src={`/images/movies/${movie.image}`} alt={movie.title}className=""/>
            
                <h3 className="">
                    {movie.title}
                </h3>
                <p>{movie.abstract}</p>
        </div>
    )
}