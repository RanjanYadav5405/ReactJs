
export const SeriesCards = (props) =>{
    const {id,name, img_url,rating,description,genre,cast,watch_url} = props.data
    // const {data} = props
    const btn={
      padding:"1.2rem 2.4rem",
      border:"none",
      backgroundColor:rating >= 8.5?" #7dcea0" : "#f7dc6f" ,
      color:"var(--btn-color)",
      fontSize:"1.6rem",
      font:"blod",
      cursor:"Pointer"
    }
  const ratingclass = rating >= 8.5? "super_hit": "average"


    return(
      
        <li className="card">
        <div>
          <img src={img_url} alt="abc.jpg" width= "30%" height="30%" />
          <div className="card-content">
         <h2>Name:{name}</h2>  {/*  Dynamic Value using value */}
         <h3>Rating:<span className={`rating ${ratingclass}`}>{rating}</span></h3> {/*  Dynamic Value using expression */}
         <p>{description}</p>  
         <p>Genre:{genre}</p> {/*  Dynamic Value using function */}
         <p>Cast:{cast}</p> {/*  Dynamic Value using function */}
         
          <a href={watch_url} target="_blank" >
          <button style={btn}>Watch Now</button>
          </a>
          </div>
        </div>
        </li>
    )
}