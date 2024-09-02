import seriesData from '../api/seriesData.json'
import {SeriesCards} from './Lists'


const NetflixSeries = () =>{
   return(  
    <>
    <ul className='grid grid-three--cols '>
        {seriesData.map(curElem=>  <SeriesCards key={curElem.id} data={curElem}/>)}
   
     </ul>
     </>
     )
   
 }


 export default NetflixSeries;

