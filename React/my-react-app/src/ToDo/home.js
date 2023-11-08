import { Link } from "react-router-dom";
import Login from "./login";
import "./nav.css"
function Home(props){
    return(
        <>
        <h1>Welcome Home</h1>
        <Login/>
        </>
    )
}

export default Home