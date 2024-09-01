export const SeriesCards = (props) =>{
    const {id,name, img_url,rating,description,genre,cast,watch_url} = props.data
    // const {data} = props
    return(
      
        <li >
        <div>
          <img src={img_url} alt="abc.jpg" width= "30%" height="30%" />
         <h2>Name:{name}</h2>  {/*  Dynamic Value using value */}
         <h3>Rating:{rating}</h3> {/*  Dynamic Value using expression */}
         <p>{description}</p>  
         <p>Genre:{genre}</p> {/*  Dynamic Value using function */}
         <p>Cast:{cast}</p> {/*  Dynamic Value using function */}
         
       <a href={watch_url} target="_blank" >
          <button>Watch Now</button>
          </a>
        </div>
        </li>
    )
}