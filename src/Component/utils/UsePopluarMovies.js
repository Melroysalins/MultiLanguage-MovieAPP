import { useEffect } from "react"
import { API_OPTIONs } from "./APIcontant";
import { useDispatch } from "react-redux";
import { addpopularmovies } from "./MoviesSlice";

export const UsePopularMovies = () => {

    const dispatch = useDispatch();

    useEffect (() => {
            fetchpopulardata();
    },[])


    const fetchpopulardata = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONs);
        const resposne = await data.json();
       

        dispatch(addpopularmovies(resposne.results))


    }
}