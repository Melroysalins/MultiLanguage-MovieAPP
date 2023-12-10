import { useEffect } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONs, MYAPI } from "./APIcontant";

export const UseLang = () => {
const selector = useSelector((store) => store.movies.bannerdisplay);

const {title} = selector;

useEffect (() => {
    fetchtitledata ();
},[])

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

    console.log(response)

    console.log(title)
}

}