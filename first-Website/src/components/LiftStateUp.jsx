import { useState } from "react"

export const LiftStateUp = () => {

    const [InputValue, SetInputValue] = useState('')

    return(
        <>
        <InputComponent InputValue={InputValue} SetInputValue={SetInputValue}/>
        <DisplayComponent InputValue={InputValue} />
        
        </>
    )
}


const  InputComponent = ({InputValue, SetInputValue}) => {
   

    return(
        <>
        <input type="text" placeholder="Enter Your Name" value={InputValue} onChange={(e) => SetInputValue(e.target.value)}/>
        </>
    )
}
const  DisplayComponent = ({InputValue}) => {
     
    return(
        <>
        <p>The Current Value is: {InputValue}</p>
        </>
    )
}