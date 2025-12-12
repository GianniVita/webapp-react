import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function AdminDashboard() {

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
            <div className="banner bg-light p-4 mb-5">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1 className="display-5">Dashboard</h1>
                    <Link to={'/admin/movies/create'} className="btn btn-dark">
                        <i className="bi bi-plus-circle"></i>    Add Movie
                    </Link>
                </div>
            </div>

            <div className="container">

                <div className="table-responsive">
                    <table
                        className="table table-striped table-hover table-borderless table-light align-middle">
                        <thead className="table-light">

                            <tr>
                                <th>ID</th>
                                <th>IMAGE</th>
                                <th>TITLE</th>
                                <th>DIRECTOR</th>
                                <th>GENRE</th>
                                <th>YEAR RELEASE</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {movies.map(movie =>

                                <tr className="">
                                    <td scope="row">{movie.id}</td>
                                    <td>
                                        <img width={60} src={movie.image} alt="" />
                                    </td>
                                    <td>{movie.title}</td>
                                    <td>{movie.director}</td>
                                    <td>{movie.genre}</td>
                                    <td>{movie.release_year}</td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <a href="" className="btn btn-sm btn-dark">
                                                <i className="bi bi-eye-fill"></i>
                                            </a>
                                            <a href="" className="btn btn-sm btn-dark">
                                                <i className="bi bi-pencil-fill"></i>
                                            </a>
                                            <button className="btn btn-sm btn-danger">
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>     
                                    </td>
                                </tr>

                            )}

                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>


            </div>






        </>
    )
}       