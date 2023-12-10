import React, { useState } from 'react'
import "./Drop.css"

import {BiPlus} from "react-icons/bi"
import { Funtiontoaddlangquestion, questionsarray } from './LanguageConstant'
import {RxCross2} from "react-icons/rx"
import { useSelector } from 'react-redux'
import { hindiquestionarray } from './LanguageConstant'

const DropDown = () => {

    Funtiontoaddlangquestion();

    const [showmessage , Setmessage] = useState(-1);

    const [langarray , Setlangarray] = useState(null);

    const arrayofquestions = useSelector((store) => store.langs.langquestion)

    const handleshowmessage = (index) => {
        
        Setmessage(index === showmessage ? -1 : index)
    };

    if(arrayofquestions === null) return null;

   
  return (
    
        <div className='main_section'>{

            arrayofquestions.map((element) => (

            <div className='first_div' key={element?.id} onClick={() => handleshowmessage(element?.id)}>

            <div className='frst_question_1' key={element?.id}>
                <h3>{element?.question}</h3>{

                    element?.id === showmessage ? <RxCross2  className='plus_icon'/> :  <BiPlus className='plus_icon'/>

                }
               
            </div>
            {

            element?.id === showmessage && 

                <div className='answers'>
                <p>{element?.ans}</p>
            </div>

            }
            
    
           
        </div>
        ))
        }
        </div>
  )
}

export default DropDown