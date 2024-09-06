// Event Passing as props

export const EventProps =  () =>{

    const handleName = (user) => {
        alert (`Hey, ${user}`)
    }

    const handleHover = () => {
        alert (`Hey, Thanks for hovering`)
    }
         
    return(
        <>
        <WelcomeUser onClickButton = {() => handleName("Ranjan")} onMouseEvent = {handleHover}/>
        </>
    )
}


const WelcomeUser = (props) =>{

    const {onClickButton, onMouseEvent} = props

    const greeting = () => {
            console.log("Hey Welcome")
            onClickButton()
         
    }

    return(
    <>
    <button onClick ={onClickButton}>Click me</button>
    <button onMouseEnter={onMouseEvent}>Mouse hover</button>
    <button onClick={greeting}>greeting</button>
    
    </>
    
    )

}