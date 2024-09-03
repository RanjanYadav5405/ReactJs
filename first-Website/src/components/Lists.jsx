import styles from "./Netflix.module.css"
import styled from "styled-components"


export const SeriesCards = (props) =>{
    const {name, img_url,rating,description,genre,cast,watch_url} = props.data
    // const {data} = props

    // const btn={
    //   padding:"1.2rem 2.4rem",
    //   border:"none",
    //   backgroundColor:rating >= 8.5?" #7dcea0" : "#f7dc6f" ,
    //   color:"var(--btn-color)",
    //   fontSize:"1.6rem",
    //   font:"blod",
    //   cursor:"Pointer"
    // }


    // const ButtonRanjan =styled.button({

    //   padding:"1.2rem 2.4rem",
    //   border:"none",
    //   backgroundColor: ${rating >= 8.5?" #7dcea0" : "#f7dc6f"} ,
    //   color:"var(--btn-color)",
    //   fontSize:"1.6rem",
    //   font:"blod",
    //   cursor:"Pointer"
    // })

    const ButtonRanjan =styled.button`
      padding:1.2rem 2.4rem;
      border:none;
      background-color: ${(props)=> props.rating >= 8.5? "#7dcea0" : "#f7dc6f"} ;
      color:var(--btn-color);
      font-size:1.6rem;
      font:blod;
      cursor:Pointer
   `;

   const Rating = styled.h3`
          font-size: 1.6rem;
          color: red;
          text-transform:capitalize;
   `;

  const ratingclass = rating >= 8.5? styles.super_hit: styles.average;


    return(
      
        <li className={styles.card}>
        <div>
          <img src={img_url} alt="abc.jpg" width= "30%" height="30%" />

          <div className={styles['card-content']}>

         <h2>Name:{name}</h2>  {/*  Dynamic Value using value */}
         <Rating>Rating:<span className={`${styles.rating} ${ratingclass}`}>{rating}</span></Rating> {/*  Dynamic Value using expression */}
         <p>{description}</p>  
         <p>Genre:{genre}</p> {/*  Dynamic Value using function */}
         <p>Cast:{cast}</p> {/*  Dynamic Value using function */}
         
          <a href={watch_url} target="_blank" >
          <ButtonRanjan rating= {rating}>Watch Now</ButtonRanjan>
          </a>
          </div>
        </div>
        </li>
    )
}