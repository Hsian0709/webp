import * as React from 'react';
import AddTodo from './Add';
import './App.css';
const { useState } = React;

function App() {
  const [input, setInput] = useState("")
  const [lists, setlists] = useState([]);
  return (
    <div className="App">
      <div className="App-header">CGU Todo list</div >
        <AddTodo input={input} setInput={setInput} lists={lists} setlists={setlists}/>
    </div>
  );
}

export default App;