import SubHeader from "./subHeader"

let Header=(props)=>{
    return(
    <>
    <h1>Agaram Software Acdemy</h1>
    <SubHeader name={props.name}/>
    </>
    )
}

export default Header