import React, { useContext, useEffect, useState } from 'react'
import DownloadBtn from './DownloadBtn';
import '../../scss/dashboard.scss'
import RemoveBtn from './RemoveBtn';
import { CardContext, CounterContext } from '../../misc/useContext';


function HandleBtn() {

  return (
      <>
      <DownloadBtn /> 
      <RemoveBtn />
      </>
  )
}

export default HandleBtn