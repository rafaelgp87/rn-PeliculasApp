import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '27167e111fe5415aa32aebc2a156db41',
        language: 'es-ES'
    }
});

export default movieDB;