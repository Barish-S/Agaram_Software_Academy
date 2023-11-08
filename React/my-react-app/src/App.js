import './App.css';
import Header from './header'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ToDo from './ToDo/ToDo';
import User from './ToDo/list';
import Home from './ToDo/home';
import Login from './ToDo/login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
let App = () => {
  let [isLogged, setLogged] = useState({
    status: false,
    mail:"Guest User"})
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login islogged={isLogged} setLogged={setLogged} />,
    },
    {
      path: "/todo",
      element: <ToDo islogged={isLogged} setLogged={setLogged}/>,
    },
    {
      path: "/user",
      element: <User islogged={isLogged} setLogged={setLogged} />,
    },
  ]);
  // let [firstName,setfname]=useState("Welcome")
  //   return (
  //     <div className="App">
  //       <Header name={firstName} funct={setfname}/>
  //       <button onClick={()=>setfname("Always Welcomes You!!!")}>State</button>
  //     </div>
  //   );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App;