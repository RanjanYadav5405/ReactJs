// React hooks UseState

import '../EV.css'
import {useState} from 'react'

export const State = () =>{

    // let value = 0;

    // const handleValue = () =>{
    //     value++;
    //     console.log(value)
    // }


    // let array = useState()

    // console.log(array)

    const [count, setCount] = useState(0);

      const handleCounter = () =>{
        setCount(() => count + 1)
      }



    return(
        <section className="main-div">
            <h1>{count}</h1>
            <button onClick={handleCounter}>Increment</button>
        </section>
    )
} 