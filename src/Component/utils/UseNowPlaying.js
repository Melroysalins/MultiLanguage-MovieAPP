import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_OPTIONs } from "./APIcontant";
import { addNowplayingMovies } from "./MoviesSlice";

export const UseNowPlaying = () => {
    const dispatch = useDispatch();


    useEffect(() => {
            fetchnowplayingmovie()
    },[])


    const fetchnowplayingmovie = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONs);

        const response = await data.json();
        dispatch(addNowplayingMovies(response.results))
    }
}