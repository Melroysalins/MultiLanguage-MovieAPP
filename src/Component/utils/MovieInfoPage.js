import React, { useEffect } from 'react'
import "./Movieinfo.css"
import { useSelector } from 'react-redux'
import { TMDBCDN_URL } from './APIcontant';
import {FaStar} from "react-icons/fa"
import { useParams } from 'react-router';
import { UseGetselectedMovies } from './UseGetselectedMovies';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { LastLanguageFunction } from './LastSliceLanguage';
import { transcribeToHindi, translateToHindi, transliterateToHindi } from './Function_Lang';

const MovieInfoPage = () => {
 
  

    UseGetselectedMovies()
    

    
   



  const select = useSelector((store) => store.movies.selectedmoviedetails)

  const castselector = useSelector((store) => store.movies.castcrewdetails);

  const postersarray = useSelector((store) => store.movies.allbanners);

  const allrecommendations = useSelector((store) => store.movies.recommendation );


  const languageselect = useSelector((store) => store?.langs?.language);


  const HindiTitleselector = useSelector((store) => store.movies.Hindi_titleofmovie);

  const HindiOverviewselector = useSelector((store) => store.movies.hindilanguagemoviedetails);


  const HindiTaglineselector = useSelector((store) => store.movies. HindiTagline);

 

 


  if(select === null || castselector === null) return <Shimmer/>;

  if(postersarray === null || allrecommendations === null) return <Shimmer/>

  if(HindiOverviewselector === null || HindiTitleselector === null ) return <Shimmer/>

  if(HindiTaglineselector === null) return <Shimmer/>
 


 


  







  return (
    <div className='movie_Page'>
        
        <div className='movie_banner_page'> 
           
        <div className='movie_poster'> 
            <img src={TMDBCDN_URL + select?.poster_path}></img>
        </div>

       
       <div className='movie_details'>
        
        <div className='movie_title'>
            <h2>{languageselect === "Eng"? select?.title : HindiTitleselector?.title}</h2>
        </div>

        <div className='genres_div'>
            <span>{languageselect === "Eng" ? "Released Date" : "जारी तिथि" }: {select?.release_date}</span>
               
        </div>

        <div className='genres_divs'>
            <span className='label_rating'>{ languageselect === "Eng" ?  "Rating" : "रेटिंग"} :</span>
                <span className='rating'>{Math.trunc(select?.vote_average)} <FaStar className="star"/> </span>
        </div>

        <div className='tagline_div'>
          <span>{ languageselect === "Eng"? select?.tagline  : HindiTaglineselector?.tagline}...</span>

        </div>

            <div className='overview_section'>
                    <h4>{ languageselect === "Eng" ? "Overview" : "अवलोकन" }</h4>
                <p>{ languageselect === "Eng"? select?.overview : HindiOverviewselector?.overview}</p>
            </div>


       </div>

    </div>

    <div className='series_cast_section'>

       <div className='the_heading'>
       <h3>{ languageselect === "Eng" ? "Series Cast " : "सीरीज कास्ट"}</h3>
       </div>

       <div className='cast_crew_grid' key={112}>
       {castselector.map((element) => {
    if (element?.poster_path !== null) {
      return (
        <div className='cards_1' key={element?.id}>
          <div className='images_actor'>
            <img src={TMDBCDN_URL + element?.profile_path} alt={element?.name} />
          </div>
          <div className='names'>
            {       
            <span>{ languageselect === "Eng" ? element?.name :  element?.name }</span>}
          </div>
        </div>
      );
    }
    return null; // Skip rendering for elements with null poster_path
  })}
       

          
  













       </div>







    

    </div>

    {/* code starts here */}
   
    {/* code ends here */}


     {/* code starts here */}
     <div className='series_cast_section'>

<div className='the_heading'>
<h3>{ languageselect === "Eng" ? "Posters" : "पोस्टर"}</h3>
</div>

<div className='cast_crew_grid' key={111}>
  {

    postersarray.map((x) => (

      <div className='cards_1' key={x?.id}>

      <div className='images_actor'>
        <img src={TMDBCDN_URL + x?.file_path}></img>  
      </div>

     
  </div>

    ))
  }


    














</div>









</div>
{/* code ends here */}

  

    














</div>

          



    
    
                

  )
}

export default MovieInfoPage