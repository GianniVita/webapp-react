export default function SingleMovieCard({movie}){



    return(

        <div className="col" key={movie.id}>
            <div className="card">
                <img src={movie.image} alt="" className="card-img-top" />
                <div className="card-body">
                    <h3 className="card-title">
                        {movie.title}
                    </h3>
                    <p>{movie.abstract}</p>
                </div>
            </div>

        </div>


    )
}