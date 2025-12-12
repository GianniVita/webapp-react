import SingleMovieCard from "./SingleMovieCard";

export default function MoviesList({movies}){


    return (

        <section className="my4 py-3">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                    {
                        movies.map(movie =>
                            <SingleMovieCard movie={movie} key={movie.id} />
                        )
                    }
                </div>
            </div>
        </section>
    )
}