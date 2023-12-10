import React, { useEffect, useState } from 'react'

import {BsPlayFill ,BsInfoCircle} from "react-icons/bs"
import { useSelector } from 'react-redux'
import { UseLang, url } from './utils/LanguageTranslator';
import { API_OPTIONs } from './utils/APIcontant';

const VideoTitle = () => {
  const language =  useSelector((store) => store.langs.language);

  const selector = useSelector((store) => store.movies.bannerdisplay);
  
  const [titleofmovie , Settitleofmovie] = useState(null);

  const [overviewofmovie ,Setoverviewofmovie] = useState(null);

const {title ,overview} = selector;

useEffect (() => {
    fetchtitledata ();
    fetchoverviewdata();
},[title])

const fetchtitledata = async () => {

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
		text: title
	})
};

    
    const data = await fetch(url ,options);

    const response = await data.json();

   

    Settitleofmovie(response?.data?.translatedText)
    
}
  
const fetchoverviewdata = async () => {

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
  text: overview
})
};

  
  const data = await fetch(url ,options);

  const response = await data.json();

  

  Setoverviewofmovie(response?.data?.translatedText)
}

















  return (
    <div className='video_title_section'>

        <div className='title'>
            <h2>{language === "Eng" ? title : titleofmovie} </h2>
        </div>
        <div className='overview'>
          <span>{language === "Eng" ? overview : overviewofmovie}</span>
        </div>
        <div className='banner_buttons_div'>
          <button> <BsPlayFill className='play'/>{ language === "Eng" ? "Play" : "खेल"}</button>
          <button>
            <BsInfoCircle className='moreinfo'/>
           {language === "Eng" ? "More info" : "और जानकारी"}</button>
        </div>
    </div>
  )
  }

export default VideoTitle