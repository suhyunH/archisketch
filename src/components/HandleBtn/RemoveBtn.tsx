import { Delete, DeleteSweep, FileCopy } from '@material-ui/icons';
import React, { useContext, useState } from 'react'
import { CardContext, CounterContext, ImageContext } from '../../misc/useContext';
import "../../scss/modal.scss"
interface RemoveProps{
  // chosenIdx : number[];
  isDrop?:boolean
  setIsOpen? :(v: boolean) => void 
}

function RemoveBtn({ isDrop , setIsOpen}:RemoveProps) {
  const { state, setState }= useContext(ImageContext);
  const {cards, setCards} = useContext(CardContext);
  const [open, setOpen] = useState<boolean>(false);
  const {count, setCount} = useContext(CounterContext);

  const onToggle =()=>{
      setOpen(!open)
  }

  const onDelete =()=>{
      const newState = [...state]
      if(cards){
        cards.map(i=>newState.splice(i,1));
      }else if(count){
        newState.splice(count,1);
      }
      setState(newState);
      setCards(null);
      setOpen(false);
      if(setIsOpen){
        setIsOpen(false);
      }
  }

  return (
    <>
    {open && 
        <div className='modal'>
        <div className='modal-container'>
            <div className='modal-img'>
            <FileCopy/>
            <DeleteSweep />
            </div>
            <div className='title'>
                <h2>확인</h2>
            </div>
            <div className='desc'>
                <span>정말 이 이미지를 삭제 하시겠습니까?</span>
            </div>
            <div className='footer'>
                <button className='confirm' id="confirm" onClick={()=>onDelete()}>삭제</button>
              <button className='close' onClick={onToggle}>돌아가기</button>
            </div>
        </div>
    </div>
    }
    <button type='button' onClick={onToggle}>{isDrop? '삭제' :<Delete />}</button>
    </>
  )
}

export default RemoveBtn