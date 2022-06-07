import React from "react";
import "./Complete.css"
const { useState } = React; 
const Todolist = ({ list, lists, setlists }) => {
    const handledelete = () => {
        setlists(lists.filter((el) => el.id !== list.id));
    }
    const [complete, setcomplete] = useState(false);
    const handlecomplete = () => {
        setcomplete(!complete);  
    }
    return (
        <div style={{
            margin: "auto",
            width: "400px",
            display: "flex",
        }} key={list.id} >
            <input type={"checkbox"} onClick={handlecomplete} />
            <li className={`${complete? "completed" : "uncompleted"}`}>{list.text}</li>
            <button style={{ border: "none", background: "white", marginTop: "-3px" }} onClick={handledelete}>x</button>
        </div >
    )
}

export default Todolist