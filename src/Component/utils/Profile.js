import React, { useEffect } from 'react'
import "./Profile.css"
import Header from '../Header'
import DropDown from './DropDown'
import {  signOut } from "firebase/auth";



import { useSelector } from 'react-redux';



const Profile = () => {


  const language = useSelector((store) => store.langs.language)

  useEffect(() => {
    // Anything in here is fired on component mount.
    return () => {
        // Anything in here is fired on component unmount.

        console.log(" Anything in here is fired on component unmount.")
    }
}, [])



  return (
    <div className='profile_page-Section'>
       

       
            <DropDown/>
       
    </div>
  )
}

export default Profile