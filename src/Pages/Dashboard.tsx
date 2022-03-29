import React, { useContext, useEffect, useState } from 'react'
import ImageCard from '../components/ImageCard'
import "../scss/dashboard.scss"
import {CardContext, ImageContext} from "../misc/useContext"
import HandleBtn from '../components/HandleBtn';
import { Refresh } from '@material-ui/icons';
import Modal from '../components/Modal';
import Spinner from '../components/Spinner';


function Dashboard() {
  const { state, setState }= useContext(ImageContext);
  const {cards, setCards} = useContext(CardContext)
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const arr = Array(state.length).fill(undefined).map((_,idx)=>idx);
  const selectAll =(e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.checked){
      setCards(arr);
    }else{
      setCards(null);
    }
  }
  const selectCancel=()=>{
    if(cards?.length ===0){
      return 
    }
    setCards(null);
  }
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 1000)
  },[])
 
  return (
    <div>
        <div className='close-btn-container'>
            <button type='button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>        
            </button>
        </div>
        {isLoading?  <Spinner />:
        <div className='content-container'>
          <div className='gallery-header'>
            {cards? 
                  <>
                  <div className='select-nav-left'>
                    <span className='image-total'>{cards.length}개의 렌더 이미지 선택됨</span>
                    <div className='image-select-all'>
                      <input id="selectAll" type="checkbox" onChange={selectAll} checked={cards.length===state.length}/>
                      <label htmlFor='selectAll'>모두 선택</label>
                    </div>
                  </div>
                  </>
                  :
                  <span className='image-total'>{state.length}개의 렌더샷</span>
            }
                    
                    <h3>갤러리</h3>
              {cards?
                (<>
                  <div className='handlebtn-container'>
                      <HandleBtn/>
                      <button type='button' onClick={selectCancel}>선택 취소</button>
                  </div>
                
                </>
                )
                : null
              }
            </div>
            <ul className='imagecard-container'>
              <ImageCard />
            </ul>

        </div>
        }
    </div>
  )
}

export default Dashboard