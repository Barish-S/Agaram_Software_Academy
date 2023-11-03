import './App.css';
import Header from './header'
import { useState } from 'react';
let App=()=> {
let [firstName,setfname]=useState("")
  return (
    <div className="App">
      <Header name={firstName}/>
      <button onClick={()=>setfname("Always Welcomes You!!!")}>State</button>
    </div>
  );
}
export default App;