import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams} from 'react-router-dom'
import '../scss/imagedetail.scss'
import {ImageContext} from "../misc/useContext"
import HandleBtn from '../components/HandleBtn';

type ParamsProps={
  id : string 
}
function ImageDetail() {
  const {id} = useParams() as ParamsProps
  const [clickedSlide, setClickedSlide] = useState<number>(parseInt(id));
  const { state, setState }= useContext(ImageContext);

  const handleNext=()=>{
    setClickedSlide((prev)=>  prev +1);
    if(clickedSlide === state.length-1){
      setClickedSlide(state.length-1);
  }
}
  const handlePrev=()=>{
    setClickedSlide((prev)=> prev -1);
    if(clickedSlide <= 0){
       setClickedSlide(0); 
     }
  }
  console.log(clickedSlide)

  return (
    <div>
        <div className='header'>
          <Link to="/">
            <div>
                <button type='button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                </button>
        <h1>{clickedSlide}</h1>
            </div>
          </Link>
          <div className='handlebtn-container'>
            <HandleBtn  clickedSlide={clickedSlide}/>
          </div>
        </div>
        <div className='image-detail-container'>

          <Link to={`/image/${clickedSlide}`}>
          <button className='prev-btn' onClick={handlePrev}>&larr;</button>
          </Link> 
          <div className='image-content'>
          <img src={state[clickedSlide]._id} alt="디테일 사진" />
          </div>
          <Link to={`/image/${clickedSlide}`}>
          <button className='next-btn' onClick={handleNext}>&rarr;</button>
          </Link>
        </div>

    </div>
  )

}

export default ImageDetail