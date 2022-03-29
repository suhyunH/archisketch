import { Refresh } from '@material-ui/icons'
import React from 'react'
import "../scss/spinner.scss"

function Spinner() {
  return (
    <div className='spinner'><Refresh /></div>
  )
}

export default Spinner