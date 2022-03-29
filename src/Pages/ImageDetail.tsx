import React, { useContext, useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import '../scss/imagedetail.scss'
import {CounterContext, ImageContext} from "../misc/useContext"
import HandleBtn from '../components/HandleBtn';
import Spinner from '../components/Spinner';

function ImageDetail() {
  const { state, setState }= useContext(ImageContext);
  const {count, setCount} =useContext(CounterContext);
  const [isLoading, setIsLoading] =useState(true);
  const url = (state[count]._id).split("/")[6];
  
  const handleNext=()=>{
      setCount(prev => prev+1);

    if(count === state.length-1){
     setCount(state.length-1);
    }
}
  const handlePrev=()=>{
      setCount(prev => prev-1);
    if(count <= 0){
       setCount(0); 
     }
  }
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 1000)
  },[])

  return (
    <div>
        <div className='header'>
          <Link to="/">
            <div>
                <button type='button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                </button>
            </div>
          </Link>
          <div className='handlebtn-container'>
            <HandleBtn/>
          </div>
        </div>


        {
          isLoading? <Spinner /> :

          <div className='image-detail-container'>
            <Link to={`/image/${url}`}>
            <button className='prev-btn' onClick={handlePrev}>&larr;</button>
            </Link> 
            <div className='image-content'>
               <img src={state[count]._id} alt="디테일 사진" />
            </div>
            <Link to={`/image/${url}`}>
            <button className='next-btn' onClick={handleNext}>&rarr;</button>
            </Link>
          </div>
        }

    </div>
  )

}

export default ImageDetail