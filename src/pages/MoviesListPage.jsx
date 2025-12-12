import axios from "axios"
import { useEffect, useState } from "react"
import MoviesList from "../components/MoviesList"

export default function MoviesListPage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/movies')
            .then(response => {
                console.log(response);
                setMovies(response.data)
            }).catch(err => {
                console.log(err.message);
            })
    }, [])

    return (
        <>
            <div className="container my-4">
                <h1 className="mb-4">All Movies</h1>
            </div>
            <MoviesList movies={movies} />
        </>
    )
}