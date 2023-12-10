import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { useParams } from "react-router";
import { API_OPTIONs } from "./APIcontant";
import { addActorsdatatoHindi, addHindiTagline, addHindititleofmovie, addallbanners, addcastcrewdetails, addhindilanguagemoviedetails, addrecommendation, addselectedmoviedetailsinfo } from "./MoviesSlice";
import Shimmer from "./Shimmer";

export const UseGetselectedMovies = () => {


    const [titleofmovie , Settitleofmovie] = useState(null);

    const dispatch = useDispatch();

    const {movieid} = useParams()

    useEffect(() => {

            fetchselectedmoviedetails();
            fetchcastdetails();

            fetchbannerdata();

            fetchrecommendedVideo();

            converoverviewtohindi();

            converttitletohindi();

            convertTaglinetoHindi();
 

      
    },[]);

    const fetchselectedmoviedetails = async () => {

        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?language=en-US`, API_OPTIONs);

        const response = await data.json();

     

        dispatch(addselectedmoviedetailsinfo(response))


        Settitleofmovie(response?.overview)


      


        
    }

    const fetchcastdetails = async () => {

        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/credits?language=en-US`, API_OPTIONs);
        const response = await data.json();

     

        dispatch(addcastcrewdetails(response?.cast.slice(0,20)))
    }

    const fetchbannerdata = async () => {

        const data = await  fetch(`https://api.themoviedb.org/3/movie/${movieid}/images`,API_OPTIONs);

        const response = await data.json();

       

        dispatch(addallbanners(response?.posters.slice(0,20)))
    }


    const fetchrecommendedVideo = async () => {

        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/recommendations?language=en-US&page=1`, API_OPTIONs)

        const response = await data.json();

       

        dispatch(addrecommendation(response?.results.slice(0,20)))
    }

    //console.log(titleofmovie?.overview)



    const converoverviewtohindi = async () => {

        const data1 = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?language=en-US`, API_OPTIONs);
   
        const response1 = await data1.json();
      
        const url = 'https://text-translator2.p.rapidapi.com/translate';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '286a4ae6f6msh9f12eeb6b0fdabcp15dbc1jsn80e298437aed',
                'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
            },
        body: new URLSearchParams({
            source_language: 'en',
            target_language: 'hi',
            text:  response1?.overview
        })
    };
    
        
        const data = await fetch(url ,options);
    
        const response = await data.json();
    
        dispatch(addhindilanguagemoviedetails({
            overview : response?.data?.translatedText


        }))
  }

  const converttitletohindi = async () => {

    const data1 = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?language=en-US`, API_OPTIONs);

    const response1 = await data1.json();
  
    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '286a4ae6f6msh9f12eeb6b0fdabcp15dbc1jsn80e298437aed',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
    body: new URLSearchParams({
        source_language: 'en',
        target_language: 'hi',
        text:  response1?.title
    })
};

    
    const data = await fetch(url ,options);

    const response = await data.json();

   dispatch(addHindititleofmovie({
    title : response?.data?.translatedText
   }))
}

const convertTaglinetoHindi = async () => {

    const data1 = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?language=en-US`, API_OPTIONs);

    const response1 = await data1.json();
  
const url = 'https://text-translator2.p.rapidapi.com/translate';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '286a4ae6f6msh9f12eeb6b0fdabcp15dbc1jsn80e298437aed',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	},
    body: new URLSearchParams({
        source_language: 'en',
        target_language: 'hi',
        text:  response1?.tagline
    })
};

    
    const data = await fetch(url ,options);

    const response = await data.json();

   dispatch(addHindiTagline({
    tagline : response?.data?.translatedText
   }))
}




















}