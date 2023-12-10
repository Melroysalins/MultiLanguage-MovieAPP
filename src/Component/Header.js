import React from 'react'
import { netflixlogourl } from './utils/Images'
import { addchangelanguage, changelanguage } from './utils/Languageslice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import {  signOut } from "firebase/auth";

import { auth } from "./utils/FireBase"

import { adduserinfo, removeuser } from './UserSlice'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';


const Header = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const users = useSelector((store) => store.users.userinfo )

  const handlelanguagechange = (value) => {

    dispatch(addchangelanguage(value))
   
  }

  const handlesignout = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
      

    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
   

  const taketoprofilepage = ()=> {

        navigate("/profile")
      
  }


  useEffect(()=> {

   let unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(adduserinfo({
            id:uid,
            email : email,
            displayName : displayName
        }))
        navigate("/browse")
        // ...  
      } else {
        dispatch(removeuser())
        navigate("/")
        // User is signed out
        // ...
      }
    });

    return ()=> {

      unsubscribe();

    }

  },[])
 

  return (
    <div className='header'>
        <div className='netflix-logo'>
          <img src={netflixlogourl}></img>
        </div>
        {

          !users && 

          <div className='selector_class'>
         
          <select onChange={(e) => handlelanguagechange(e.target.value)}>
           <option value={"Eng"}>English</option>
           <option value={"Hindi"}>Hindi</option>
          </select>
        </div>
        }{
          users && 
        <div className="header_last_div">

         
        <div className='user_profile_icon' onClick={()=> taketoprofilepage()}>

                
              
             
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUNfoD///8Ae30AeHoAdXcAdnl6q6z2+/vo8vLx+Ph1sbIAdHfu9PQHfH8AgYPl8vI7kJKRvr+hx8jO4+PJ3d4eioxppqja6eni7OxdoqRSnqC42dqXxsaw09Ntra8ph4l/uLmGtrdapqeozc02lZdMmZuuzM3A2NnU4+SRvL2fy8xSmZpEkZO+1NV1qaqNxlfBAAAEIElEQVR4nO3bXXeiOhQGYNgJg6AiiIiggtbP0U7//8+beJzjoCYtSAQ7630uetVmvZuEEOnWMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvjNi3Ii8rkWtpuiLGCyKxA/dOchIZ3FPmGc5tVckGf4iPMUIA9/QGYNoEZr/c4Y+0zh2FSydX2KY00RfDDJ2ZlEnbadEa+EUYziBrlkkPzav2W4rJc5vYphzTQPTbYGixBZmkc/uYphDPTG29yObHb/p7YYSSQxzqSEGJbZs6FX9kavJQ1mMQV6/RDaVjWzaDU8i/ZDGMBf116knH1nH0FUoLrQ5qR2D3hQVhl0dwUvjihh2VHctsZVqaC3By6K1IoaZ1a2Qj5QXr68leznKpWQu6y5Tfv8wbKXC7HkV7hQjN1xh+rQKmeQkca6w0acFRaoKa9+HyosXci3Ry7Kk5w4de6lhKCps+nl4d+w+q/88VD0uHA3HpSpoLJ/ErH6FdHRkIw+b3GdOPOljK841DE2yvWaiYflXjLGWTKLtaolB9w8Me938uxq+uC8x0LMZUHRboqNh9T+QY3lb4ErXrUL92dXli6N23tPwt04xRsfV+MCi5O+Hl8Gy4W20EMMvXOrhRut1Jsrd+WQy2c82Wt9TVo7hpatY5FhlhvbXtsQsLmh/11w9x0vEAAAAAAAAAAAAAAAAgH8KMc/4l/8HRXyz3e2GLf07uqD/nO+fkLHZ2eeWgnZnkVi0ifSvJOLJpUXKTtoskfxdp9fZb7TWSETprtA50XCD3RWW/Qky19dUQCx3b7r2PV1jV+dd+sU6M88iDc0v1I2Cu5bextuzLqyrdrGgdhOHmL6xrGM/0hP3EfurIM42YY/fkMRYOpR2ZDvt3Yfe/iaLPVn4j7TBiL0l9xexooe24UbXIkvWL7n7uSGryh1JjEfjofQrQefV/7T8X2OuNFIvnq3FmisxlyR+zYoWo4Fi9oRB1kAhapbyytvT4OM9OpUpr1PUZhnR8SOYqosT4sxq99AmHvifxBuEo2G2iXiXc1bEeddYp8vtaN/55K9P9bntH0qJZV+kFHrh9HAI3P8sDodVqL7nCuzwrc0Wwr9YFEjbxGuy5+MWv1F+jcgPPr2XHtAL3l9j/v4Qny+CUguvHGfnvt7n3r44LSu+IFnVIDgarW8vUsSjmepQUnr24iB65dZZYt54NXi8vtEw9V64vDOx/fmHuPre6vSmWa6/r/s5xDls7W7D8lU64fZn6vFvUt4ZMcrfk2D69VnAmQbj95xefm3KiHMn73prN/g1CuO441zm1HacQRyHo19Btva6vMz5/JWd6jQ83z8mx48fZ8kx2fi5R9++tiKiPl1rOxEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALy43/ipMgzSotaqAAAAAElFTkSuQmCC'>
                    </img>
             

               
                      
                </div>
               
                <span onClick={()=> handlesignout()}>Signout</span>
              
                </div>  
        }
        
        
        </div>
  )
}

export default Header