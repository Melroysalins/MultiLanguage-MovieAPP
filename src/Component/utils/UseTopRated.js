import { useEffect } from "react"
import { API_OPTIONs } from "./APIcontant";
import { useDispatch } from "react-redux";
import { addTopRated } from "./MoviesSlice";

export const UseTopRated = () => {

    const dispatch = useDispatch();

    useEffect (()=> {

        fetchTopRatedmovie();
    },[])


    const fetchTopRatedmovie = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONs);

        const response = await data.json();

        dispatch(addTopRated(response.results))

    }
}