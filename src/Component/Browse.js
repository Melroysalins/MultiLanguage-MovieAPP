import React from 'react'
import "./Browse.css"
import SecondHeader from './SecondHeader'
import VideoTitle from './VideoTitle'
import VideoCards from './utils/VideoCards'
import { UsePopularMovies } from './utils/UsePopluarMovies'
import { useSelector } from 'react-redux'
import { UseNowPlaying } from './utils/UseNowPlaying'
import { UseTopRated } from './utils/UseTopRated'
import { UseUpcoming } from './utils/UseUpcoming'
import { TMDBCDN_URL } from './utils/APIcontant'
import Shimmer from './utils/Shimmer'
import Header from './Header'

const Browse = () => {

  UsePopularMovies();
  UseNowPlaying();
  UseTopRated();
  UseUpcoming();

  const popularmoviesdata = useSelector((store)=> store.movies.popularmovies);

  const nowplaying = useSelector((store)=> store.movies.nowplayingmovies);

  const Toprated = useSelector((store)=> store.movies.topRated);

  const upcoming = useSelector((store)=> store.movies.upcoming);

  const selectedlang = useSelector((store) => store.langs.language);

  const bannerselect = useSelector((store)=> store.movies.bannerdisplay)

  if(bannerselect === null) return <Shimmer/>;
  

  return (
    
    <div>
        <div className='Browser_page'>
            

    <div className='main_containner'>
          <img src={TMDBCDN_URL + bannerselect?.poster_path}></img>

        
       
     <Header/>
        <VideoTitle/>
    </div>

    <div className='movie_cards_display_section'>

      <VideoCards title={ selectedlang === "Eng" ? "Popular" : "लोकप्रिय"} data={popularmoviesdata}/>
      <VideoCards title={selectedlang === "Eng" ? "Now Playing" : "अब खेल रहे हैं"} data={nowplaying}/>
      <VideoCards title={ selectedlang === "Eng" ? "Top Rated" : "टॉप रेटेड"} data={Toprated}/>
      <VideoCards title={ selectedlang === "Eng" ? "UpComing" : "आगामी"} data ={upcoming}/>
      
    </div>
    
  </div>
    </div>
  )
}

export default Browse