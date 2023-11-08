import { useState } from "react"
let List = (props) => {
    let [inputValue,setInputValue]=useState("")
    return (
        <>
            <input type="text" onKeyUp={(e) => setInputValue(e.target.value)} />
            <button type="button" onClick={() =>{
                props.setItems([...props.items, inputValue])
                
            }
            }>Add ToDo</button>
        </>
    )
}

export default List