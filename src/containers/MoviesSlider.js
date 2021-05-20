import React from 'react'
import { MOVIES } from '../assets/shared/movies'
import MovieItem from '../components/movieItem/MovieItem'
import '../components/movieItem/moviesSlider.scss'


class MoviesSlider extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            movies: MOVIES,
        }
    }


    render() {
        const movies = this.state.movies.map((movie) => {
            return (
                <div key={movie.id} className="movies-slider__item">
                    <MovieItem movie={movie} />
                </div>
            )
        })

        return (
            <div className="movies-slider">
                {movies}
            </div>
        )
    }
}

export default MoviesSlider