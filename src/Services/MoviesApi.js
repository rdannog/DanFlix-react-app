import axios from 'axios'

const MoviesApi = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/popular?api_key=0f6296ac61ec5966cd4f6b9f39a2b01c&language=en-US&page=1'
})
export default MoviesApi