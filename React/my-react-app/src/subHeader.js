let SubHeader=(props)=>{
    return(
        <>        <h3>{props.name}</h3>
        <button onClick={()=>props.funct("Welcomes You All..!!!")}>State</button>
        </>

    )
}
export default SubHeader