import React from 'react'
import "./VideoCards.css"
import Shimmer from './Shimmer'
import { TMDBCDN_URL } from './APIcontant'
import { Link } from 'react-router-dom'

const VideoCards = ({title , data}) => {

  

    if(title === null) return <Shimmer/>

    if(data === null) return <Shimmer/>

  return (
    <div className='video_cards'>

        <div className='section_title'>
        <h2>{title}</h2>
        </div>



        <div className='movie_card_grid'>{

            data.map((element) => (

                <Link to={"/movieinfo/" + element?.id}>
                <div className='First_Card' key={element?.id}>

        <div className='card_image' key={element?.id}>
        <img src={TMDBCDN_URL + element?.poster_path}></img>
        </div>
        </div>
                </Link>


            ))

        }

           

  


















        </div>

        </div>
  )
}

export default VideoCards