import React from 'react'

function MovieItem(props) {
    return (
        <div>
            <img src={props.movie.image} alt="afisha"/>
            <h2>{props.movie.title}</h2>
        </div>
    )
}

export default MovieItem