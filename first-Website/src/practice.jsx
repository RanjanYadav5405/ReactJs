export const Practice = () =>{
    let students = [5, 3];

    return(
    <>
    <h1>Students</h1>

    {/* <h3>{students.length && "No Students found"}</h3> */}

    {/* 1st */}
    {/* <h3>{students.length === 0 && "No Students found"}</h3> */}

    {/* 2nd */}
    {/* <h3>{!students.length  && "No Students found"}</h3> */}

    {/* 3rd */}
    <h3>{Boolean(!students.length ) && "No Students found"}</h3>

    <h3>Number of students : {students.length}</h3>
    
       
    </>
    )
}