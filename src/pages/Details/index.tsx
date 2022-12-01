import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ApiKey } from "../../services/api"
import { Container } from "../Main/styles"
import { Card, Meio, Voltar } from "./styles"

export function DetailsPage(){

    const {id} = useParams()
    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`)
        .then(response => response.json())
        .then(data =>{

            const movie ={
                id,
                title: data.title,
                sinopse: data.overview,
                image: `${image_path}${data.poster_path}`
            }

            setMovie(movie)
            console.log(movie)
        })
    },[id])

    return(
        <Container>
            <h1>Sinopse</h1>
            <Card>
                <div className="titulo">
                    <p>{movie.title}</p>
                </div>
                <Meio>
                    <div className="imagem">
                        <img src={`${movie.image}`} alt="" />
                    </div>
                    <div className="texto">
                        <span>{movie.sinopse}</span>
                    </div>
                </Meio>
            </Card>
            <Voltar>
                <Link to={'/'}>
                    <button>Voltar!</button>
                </Link>
            </Voltar>
        </Container>
    )
}