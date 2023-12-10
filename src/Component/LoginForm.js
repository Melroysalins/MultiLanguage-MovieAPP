import React, { useRef, useState } from 'react'

import { Languagearray } from './utils/LanguageConstant';
import { useDispatch, useSelector } from 'react-redux';
import { checkvalidateData } from './utils/Validate';
import { auth } from './utils/FireBase';
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { adduserinfo } from './UserSlice';
import { useNavigate } from 'react-router';




const LoginForm = () => {

  const [signin , Setsignin] = useState(false);

  const name = useRef(null);

  const email = useRef(null);

  const password = useRef(null);

  const langselector = useSelector((store) => store.langs.language);

  const [errormessage , Seterrormessage] = useState("");


  const dispatch = useDispatch();


  const navigate = useNavigate();


  const  handlesignin = () => {

    Setsignin(true);
  }

  const handlesignup = () => {
    Setsignin(false)
  }


  const handlesignuporsignin = (email , password) => {

    let message = checkvalidateData(email.current.value,password.current.value);

    Seterrormessage(message);

    if(message) return ;

    if(!signin){

      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
        }).then(() => {
          // Profile updated!
            // const {displayName , email} = user;
            // dispatch(adduserinfo({
            //   Username : displayName,
            //   Email : email
            // }))
          // ...
          navigate("/browse")
        }).catch((error) => {
          // An error occurred
          // ...
        });
        

      

        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Seterrormessage(errorCode)
        // ..
      });

    }
    else{

      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

      navigate("/browse")

    // const {displayName , email} = user;
    // dispatch(adduserinfo({
    //   Username : displayName,
    //   Email : email
    // }))
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Seterrormessage(errorCode)
  });

    }

  
  }




  return (
    <div className='login-form'>

      <div className='login__div'>
          <h3>{ signin ? Languagearray[langselector]?.sigin?.heading : Languagearray[langselector]?.signup?.heading }</h3>
          <form onSubmit={(e) => e.preventDefault()}>{
            !signin &&
            <input type='text'    ref={name}  placeholder={
              signin ? Languagearray[langselector]?.sigin?.name : Languagearray[langselector]?.signup?.name
            }></input>}

            <input type='email'   ref={email}  placeholder={
            signin ? Languagearray[langselector]?.sigin?.email : Languagearray[langselector]?.signup?.email

            }></input>

            <input type='password'   ref={password}   placeholder={

               signin ? Languagearray[langselector]?.sigin?.password: Languagearray[langselector]?.signup?.password   

            }></input>


          </form>

          <div className='the_message'>
          <p className='error_message'>
            {signin ? Languagearray[langselector]?.sigin?.[errormessage]?.message : Languagearray[langselector]?.signup?.[errormessage]?.message }
         </p>
          </div>
         <div className='user_message'>{

            !signin ? <>  <span onClick={() =>handlesignin()}>{

              signin ? Languagearray[langselector]?.sigin?.frstmessage : Languagearray[langselector]?.signup?.frstmessage

            }</span></> : <>
            <span onClick={() => handlesignup()}>{
                signin ? Languagearray[langselector]?.sigin?.frstmessage : Languagearray[langselector]?.signup?.frstmessage

            }</span>
            
            </>

         }
         
         </div>
         <div className='buttons_login'>
          <button className='signup' onClick={() => handlesignuporsignin(email,password)}>{

             signin ? Languagearray[langselector]?.sigin?.heading : Languagearray[langselector]?.signup?.heading

          }</button>
         </div>
      </div>

     </div>
  )
}

export default LoginForm