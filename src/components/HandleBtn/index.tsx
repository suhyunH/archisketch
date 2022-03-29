import React, { useContext, useEffect, useState } from 'react'
import DownloadBtn from './DownloadBtn';
import '../../scss/dashboard.scss'
import RemoveBtn from './RemoveBtn';
import { CardContext } from '../../misc/useContext';

interface HandleProps {
    clickedSlide?: number,
}

function HandleBtn({clickedSlide}:HandleProps) {
  const [chosenIdx, setChosenIdx]= useState<number[]>([])
  const {cards, setCards} =useContext(CardContext)
  useEffect(()=>{
    if(clickedSlide){
      setChosenIdx([clickedSlide])
    }else if(cards){
      setChosenIdx([...cards]);
    }
  },[setChosenIdx])

  return (
      <>
      <DownloadBtn chosenIdx={chosenIdx}/> 
      <RemoveBtn chosenIdx={chosenIdx} />
      </>
  )
}

export default HandleBtn