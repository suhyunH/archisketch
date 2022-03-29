import React, { useContext, useEffect, useState} from 'react'
import "../scss/imagecard.scss";
import { Link } from 'react-router-dom';
import { CardContext, CounterContext, ImageContext } from '../misc/useContext';
import DownloadBtn from './HandleBtn/DownloadBtn';
import RemoveBtn from './HandleBtn/RemoveBtn';


function ImageCard() {
    const { state, setState }= useContext(ImageContext);
    const {cards, setCards} = useContext(CardContext);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [dropId, setDropId] = useState<number>();
    const {count, setCount} = useContext(CounterContext)

    const onChecked = (e:React.ChangeEvent<HTMLInputElement>)=>{
        let checkedNum= parseInt(e.target.id)
            if(!cards?.includes(checkedNum)){
                setCards(i =>[...(i? i : []), checkedNum]);
            }else if(cards.includes(checkedNum)){
                setCards(cards.filter((i)=>i!==checkedNum));
            }
    }
    const onOptionClick=(e:React.MouseEvent<HTMLInputElement>)=>{
        const target = e.target as Element;
        setDropId(parseInt(target.id))
        setIsOpen(!isOpen)
        setCount(parseInt(target.id));
    }

    useEffect(()=>{
        if(cards?.length===0){
            setCards(null);
        }
    },[cards])

  return (
  <>
        {state.map((_, idx)=>
            <li key={idx} className='card-item' >
                <div className='card-pic' >
                    <img src={state[idx]._id}/>
                    <span className='card-view'>일인칭 뷰어</span>
                </div>
                <div className='card-hover-container'>
                    <Link to={`/image/${(state[idx]._id).split("/")[6]}`} onClick={()=>{setCount(idx)}}>
                        <div className="card-hover"></div>
                    </Link>
                    <input className='checkbox' 
                           type="checkbox" 
                           onChange={onChecked} 
                           id={`${idx}`} 
                           checked={cards?.includes(parseInt(`${idx}`)) || false}/>
                    
                    <input id={`${idx}`} 
                           className='card-option' 
                           type="button" 
                           onClick={onOptionClick} 
                           value="..."/>
                    
                    { isOpen&&dropId===idx &&
                    <div className={`option-dropdown`}>
                        <DownloadBtn isDrop/>
                        <RemoveBtn isDrop setIsOpen={(v: boolean) => {setIsOpen(v)}}
                        />
                    </div>
                    }
                </div>
            </li>
        )}
        </>
  )}

export default ImageCard