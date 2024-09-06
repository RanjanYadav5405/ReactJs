import './EV.css'


export const EventHandling  = () => {

    // function handleSubmitChange(){
    //     // console.log(event)
    //     // console.log(event.target)
    //     // console.log(event.type)
    //     alert("Button is clicked!")
    // }

    const handleSubmitChange = (event) =>{
        console.log(event)
        console.log(event.target)
        console.log(event.type)

        alert("Button is clicked!")
    }

    const handleWelcomeUser =(user) =>{
        alert("Welcome User!")
        console.log(`hey, ${user} welcome`)
    }

    return(
        <>

         {/* // ?  Function Components with Named Functions - Subscribe to Thapa Technical Youtube Channel  */
      /* Remember how we haven't called this function, if you call this function here  then it will run without even clicking. You just need to 
        pass reference and not call here. */}
        <button onClick={handleSubmitChange}>click me!</button>


         {/* In React, event handlers receive the event object as an argument by default. However, when you use an arrow function directly in 
        the onClick attribute without passing the event explicitly, React doesn't pass the event object to your handler function. This is 
         because the arrow function creates a new function and calls your handler without passing any arguments. */}
        <button onClick={(event)=>handleSubmitChange(event)}>click me 2</button>


         {/* /* //? Inline Event Handlers} */}
         <button onClick={(event) => console.log(event)}>Inline Event Handlers</button>

         {/* //? Function Components with Inline Arrow Functions */}
         <button onClick={() => alert("Hey, I am Inline event function")}>Inline Arrow fun</button>

         {/* //? Function Components with Inline Arrow Functions */}
         {/* <button onClick={handleWelcomeUser("Ranjan")}>Welcome User</button> */}
         <button onClick={() =>handleWelcomeUser("Ranjan")}>Welcome User</button>
         {/* <button onClick={handleWelcomeUser("Kumar")}>Welcome User 2</button> */}
        </>
    )
}
