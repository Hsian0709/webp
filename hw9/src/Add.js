import React from "react";
import Todolist from "./newtodo";

const AddTodo = ({ input, setInput, lists, setlists }) => {
    const handleChange = (event) => {
        setInput(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setlists([...lists, { text: input, id: Math.floor(Math.random() * 1000) }]);
        setInput("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input style={{
                        border: '0.1 rem solid',
                        borderradius: '5px',
                        width: '300px',
                        margin: 'auto',
                        padding: '4px 0px'
                    }}
                        placeholder="add a new todo..." value={input} onChange={handleChange} />
                </label>
                <input style={{ marginLeft:"2px",padding: '4px 2px' }} type="submit" value="Add" />
            </form>
            <div>
                <ul style={{ textAlign: 'left' }}>
                    {lists.map((list) => (
                        <Todolist list={list} lists={lists} setlists={setlists} />
                    ))}
                </ul>
            </div>
        </div>
    )
};
export default AddTodo
