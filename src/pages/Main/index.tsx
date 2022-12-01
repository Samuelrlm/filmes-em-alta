import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ApiKey } from "../../services/api";
import { Container, Filme, MovieList } from "./styles";


export function Mainpage () {

    const [movies, setMovies] = useState([])
    const image = 'https://image.tmdb.org/t/p/w500'
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.results)
            console.log(data.results)
        })
    },[])

    return(
        <Container>
            <h1>Filmes</h1>
            <MovieList>

                {movies.map(movie =>{
                    return(
                        <Filme key={movie.id}>
                            <Link to={`/details/${movie.id}`}><img src={`${image}${movie.poster_path}`} alt={movie.title} /></Link>
                            <span>{movie.title}</span>
                        </Filme>
                    )
                })}
            </MovieList>
        </Container>
    
)
}