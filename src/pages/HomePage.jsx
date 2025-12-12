import axios from "axios"
import { useEffect,useState } from "react"

export default function HomePage() {

    const [movies, setMovies] = useState([])


    useEffect(()=>{

        axios.get('http://localhost:3000/api/movies')
        .then(response =>{
            console.log(response);
            
        }).catch(err =>{
            console.log(err.message);
            
        })
        

    }, [])






    return (
        <div className="text-center">
            <h1>Welcome to our Movie reviews app</h1>
        </div>
    )
}