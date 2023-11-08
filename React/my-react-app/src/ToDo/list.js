import { useState } from "react"
import List from "./addList"
import { Link } from "react-router-dom";
let User=()=>{
    let [name,upName]=useState(["Ajay","Sobith","Ajil"])
    return(
        <>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home Page</Link>
            </li>
            <li>
              <Link to={`/todo`}>ToDo Page</Link>
            </li>
            <li>
              <Link to={`/user`}>User Page</Link>
            </li>
          </ul>
        </nav>
        <table className="">
            <tr>
                <th>Order</th>
                <th>Names</th>
            </tr>
            {
                name.map((t,i)=>(
                    <tr>
                        <td>{i+1}</td>
                        <td>{t}</td>
                    </tr>
                ))
            }
        </table>
        <List setItems={upName} items={name} />
        </>
    )
}

export default User