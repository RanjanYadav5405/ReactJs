import seriesData from '../api/seriesData.json'


const NetflixSeries = () =>{
   return(  
    <>
    <ul>
        {seriesData.map(curElem=>{
        return(
      
            <li key={curElem.id}>
            <div>
              <img src={curElem.img_url} alt="abc.jpg" width= "30%" height="30%" />
             <h2>Name:{curElem.name}</h2>  {/*  Dynamic Value using value */}
             <h3>Rating:{curElem.rating}</h3> {/*  Dynamic Value using expression */}
             <p>{curElem.description}</p>  
             <p>Genre:{curElem.genre}</p> {/*  Dynamic Value using function */}
             <p>Cast:{curElem.cast}</p> {/*  Dynamic Value using function */}
             
           <a href={curElem.watch_url} target="_blank" >
              <button>Watch Now</button>
              </a>
            </div>
            </li>
        )
    }

        )}
   
     </ul>
     </>
     )
   
 }


 export default NetflixSeries;

