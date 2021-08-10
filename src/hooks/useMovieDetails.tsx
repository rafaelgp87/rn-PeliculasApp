import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export const useMovieDetails = ( movieId: number ) => {
    const [state, setstate] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async() => {

        const movieDetailsPromise = movieDB.get<MovieFull>(`/${ movieId }`);
        const castPromise = movieDB.get<CreditsResponse>(`/${ movieId }/credits`);

        const [ movieDetailsResp, castPromiseResp ] = await Promise.all([ movieDetailsPromise, castPromise ]);

        setstate({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

    return{
        ...state
    } 
}
