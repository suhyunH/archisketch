import React, { useContext } from 'react'
import { CardContext, CounterContext, ImageContext } from '../../misc/useContext';
import { CloudDownload } from '@material-ui/icons';


interface DownProps{
    isDrop?:boolean
}
function DownloadBtn({isDrop}:DownProps) {
  const { state, setState }= useContext(ImageContext);
  const {count, setCount} = useContext(CounterContext);
  const {cards, setCards} = useContext(CardContext);
   
    
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
      let chosen;
      if(cards){
        chosen = cards
      } else if(count){
        chosen = [count]
      }
        chosen?.map(async (i)=> {
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