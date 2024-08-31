const NetflixMovies = () =>{
    const name = " Queen of Latina"
   //  const rating = "8.5"
    const description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam hic quae saepe neque, distinctio obcaecati repudiandae esse excepturi, reiciendis, quo commodi ipsa dignissimos."
 
    const movieGenre = () => {
     const Genre = "RomCom"
     return  Genre;
    }
 
 
 
    let age = 14
    //========================================================================
    // first condtional Statment 
 
   //  if(age>=18){
   //   return(
   //     <div>
   //       <img src="abc.jpg" alt="abc.jpg" width= "30%" height="30%" />
   //      <h2>Name:{name}</h2>  {/*  Dynamic Value using value */}
   //      <h3>Rating:{1 + 2 + 3}</h3> {/*  Dynamic Value using expression */}
   //      <p>{description}</p>  
   //      <p>Genre:{movieGenre()}</p> {/*  Dynamic Value using function */}
   //       <button>Watch now</button>
 
   //     </div>
       
   //     )
     
   //  }
 //========================================================================================
   
   // Second Condtional Statement (ternary operator)
 
   //=====================================================================================
 // another 3nd way
 
   // let canwatch = "not available"
   // if(age>=18) canwatch = "watch now"
 
 //=========================================================================================
   // another 4th way
   const canwatch =() =>{
     if(age>=18) return "watch now"
     else return "not available"
   }
 
 
 
   return(//[<NetflixMovies key="1"/>,<NetflixMovies key="2"/>,<NetflixMovies key="3"/>]
     <div>
       <img src="abc.jpg" alt="abc.jpg" width= "30%" height="30%" />
      <h2>Name:{name}</h2>  {/*  Dynamic Value using value */}
      <h3>Rating:{1 + 2 + 3}</h3> {/*  Dynamic Value using expression */}
      <p>{description}</p>  
      <p>Genre:{movieGenre()}</p> {/*  Dynamic Value using function */}
 
       {/* <button>Not Available</button> */}  
       
       {/* <button>{age>=18 ? "watch now" : "not available"}</button> */}  
 
       <button>{canwatch()}</button>
 
 
 
 
       {/* <button>{age>=19 && "Watch Now"}</button> */}
       {/* <button>{age< 18 && "Not Available"}</button> */}
     </div>
     
     )
   
 }
// defaut export

 export default NetflixMovies;

//=================================================

// Named export
export const Header =() => {
    return <p>Header</p>
}

export const Footer =() => {
    return <p>Footer</p>
}