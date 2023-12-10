import { useEffect } from "react"
import { API_OPTIONs } from "./APIcontant";
import { useDispatch } from "react-redux";
import { addTopRated, addtobanner, addupcomingmovies } from "./MoviesSlice";

export const UseUpcoming = () => {

    const dispatch = useDispatch();

    useEffect (()=> {

        fetchTopRatedmovie();
    },[])


    const fetchTopRatedmovie = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONs);

        const response = await data.json();

        dispatch(addupcomingmovies(response.results))

        dispatch(addtobanner(response?.results[2]))

    }
}