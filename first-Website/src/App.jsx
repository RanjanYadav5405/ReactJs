// import NetflixMovies, {Header, Footer } from './components/NetflixMovies'
import NetflixSeries from './components/NetflixSeries'
import "./components/Netflix.css"


export const App = () =>{
   return( 
    <section className='container'>
      <h1 className='card-heading'>
        List of best Netflix Series
      </h1>
    {/* <Header/>
      <NetflixMovies/>
      <NetflixMovies/>
      <NetflixMovies/>
      <NetflixMovies/>
      <Footer/> */}
  
      <NetflixSeries/>
      
    </section>
    
    )
  
}



