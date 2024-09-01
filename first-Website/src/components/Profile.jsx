const profile = () =>{
    return (
        <>
            <h1>Profile Card Challenge</h1>

            <ProfileCard 
            name={"Ranjan"} 
            age={22} 
            greeting={
                <div>
                    <h2>Hello, I am Ranjan</h2>
                    <p>This is my profile</p>
                    </div>
            }>
            
            <p>hobbies: Reading, Writting</p>
            <button>contact</button>
            </ProfileCard>
        
        </>
    )
}

export default profile


function ProfileCard(props){
  const {name,age,greeting,children} = props

    return (
        <>
            <h1>Name:{name}</h1>
            <h2>Age:{age}</h2>
            <h3>greeting:{greeting}</h3>
            <h3>hobbies:{children}</h3>
        </>
    )
}