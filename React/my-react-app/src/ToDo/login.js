import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToDo from "./ToDo";
function Login(props) {
    const navigate = useNavigate();
    let [loginData, setLoginData] = useState({
        email: "barish@gmail.com",
        password: 12345
    })

    function checkLogin() {
        if (loginData.email == "barish@gmail.com" && loginData.password == 12345) {
            alert("Success")
            props.setLogged({status:true,mail:loginData.email})
            navigate("/todo")

        } else {
            alert("Failed")
            props.setLogged({status:false})
            navigate("/todo")
        }
    }

    return (
        <>
            {JSON.stringify(loginData)}
            <br></br>
            <br></br>
            <br></br>
            <form>
                <label>Email : </label>
                <input type="text" defaultValue={loginData.email} onKeyUp={(e) => setLoginData({ ...loginData, email: e.target.value })}></input>
                <label>Password : </label>
                <input type="password" defaultValue={loginData.password} onKeyUp={(e) => setLoginData({ ...loginData, password: e.target.value })}></input>
                <button type="button" onClick={() => checkLogin()}>Submit</button>
            </form>
            <li>
                <Link to={`/todo`}>ToDo Page</Link>
            </li>
        </>
    )
}

export default Login