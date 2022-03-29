import React, { useContext } from 'react'
import { ImageContext } from '../../misc/useContext';
import { CloudDownload } from '@material-ui/icons';


interface DownProps{
    chosenIdx : number[]
    isDrop?:boolean
}
function DownloadBtn({chosenIdx, isDrop}:DownProps) {
  const { state, setState }= useContext(ImageContext);
    
  const setUrl = async (url:string)=>{
      return fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
    }

    const downloadImage = () => {
        chosenIdx.map(async i=> {
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = await setUrl(state[i]._id);
            a.download = `${i}`
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        })
        };
  return (
    <>
        <button className='down-btn' type='button' onClick={downloadImage}> {isDrop?'다운로드': <CloudDownload/>} </button>
    </>
  )
}

export default DownloadBtn