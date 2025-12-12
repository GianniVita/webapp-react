import axios from "axios"
import { useEffect,useState } from "react"

export default function HomePage() {

    const [movies, setMovies] = useState([])


    useEffect(()=>{

        axios.get('http://localhost:3000/api/movies')
        .then(response =>{
            console.log(response);
            setMovies(response.data)
            
        }).catch(err =>{
            console.log(err.message);
            
        })
        

    }, [])


    return (
       <>
       <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Movies Reviews App</h1>
            <p className="col-md-8 fs-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sit!
            </p>
            <button className="btn btn-primary btn-lg" type="button">
                Example button
            </button>
        </div>
       </div>
       
       
       <section className="my4 py-3">
        <div className="container">
            <div className="row">
                {
                  movies.map(movie =>
                    <div className="col">
                        <div className="card">
                              <img src={movie.image} alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h3 className="card-title">
                                        {movie.title}
                                    </h3>
                                    <p>{movie.plot}</p>
                                </div>
                        </div>

                    </div>
                  )
                }
            </div>
        </div>
       </section>
       
       </>
    )
}
       
                    

       
       