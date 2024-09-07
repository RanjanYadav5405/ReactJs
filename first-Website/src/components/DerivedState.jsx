import { useState } from "react"
import './EV.css'


// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//     { name: "Angles", age: 45 },
// ]

export const DerivedState = () => {
  
    const [users,setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "Angles", age: 45 },
    ])
 

    // Dervied State means state and props directly store in variable 
    const UserCount = users.length

    const AverageAge = users.reduce((accum,curElem)=> accum + curElem.age,0) / UserCount
    
    return (
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {
                users.map(curelem => 
                // <Introduction key={curelem.age} data={curelem}/>
                (
                 <>
                 <li key={curelem.age}>
                 <span>{curelem.name}_{curelem.age} yrs old</span>

                 </li>
                 </>
                )
                )
                }
            </ul>
            <p>Total Users: {UserCount}</p>
            <p>Average Age: {AverageAge}</p>
        </div>
    )
}


// const Introduction = (props) => {
//     return (
//         <li>
//             <h2>{props.data.name}_{props.data.age}</h2>
//         </li>
//     )
// }
