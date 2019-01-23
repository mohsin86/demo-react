import React, { Component } from 'react';
import Movie from './Movie';

import {initialMovies} from '../data/movies-data';


class Movies extends Component {
    constructor() {
        super();

        this.state = {
            movies: initialMovies
        };
    }


    render() {
        return (
            <div className="movies">

                {
                    Object
                        .keys(this.state.movies)
                        .map(key => <Movie key={key} meta={this.state.movies[key]} />)
                }

            </div>
        );
    }
}

export default Movies;