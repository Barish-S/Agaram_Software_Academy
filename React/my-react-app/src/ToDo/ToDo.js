import { useState } from "react"
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import List from "./addList"
import axios from "axios"
import { Link } from "react-router-dom";

let ToDo=(props)=>{
    let [todos,newOne]=useState(["purse","money","food","ring"])
        const Delt=(v)=>{
            let updatedTodos=todos.filter((td)=>td!==v)
            newOne(updatedTodos)
    }
    let apiData=()=>{
      axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts',
      }).then(function(response){
        console.log(response.data)
      });
    }
    return(
        <>
        {props.islogged?`Welcome ${props.islogged.mail}`:"Welcome Guest User"}
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
        <table className="" border={2}>
            <tr>
                <th>Order</th>
                <th>Items</th>
                <th>Delete</th>
            </tr>
            {
                todos.map((t,i)=>(
                    <tr>
                        <td>{i+1}</td>
                        <td>{t}</td>
                        <button type="button" onClick={()=>Delt(t)}>Delete</button>
                    </tr>
                ))
            }
        </table>
        <List setItems={newOne} items={todos} />
        <button type="button" onClick={()=>apiData()}>Get Data</button>
        </>
    )
}

export default ToDo