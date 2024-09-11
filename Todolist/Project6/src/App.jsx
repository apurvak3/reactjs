import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [addTask, setAddTask] = useState([task:"sampla task" , id:uuidv4()]);  // State to store tasks
  const [newToDo, setNewToDo] = useState("");  // State to store the new task

  const addNewTask = () => {
    setAddTask([...addTask, newToDo]);  // Add the new task to the task list
    setNewToDo("");  // Clear the input field after adding the task
    console.log("new task is added");


    let deleteToDo = {id} =>{
      setNewToDo = todo.filter
    }
  };


  return (
    <>
      <input 
        type="text" 
        value={newToDo} 
        onChange={(e) => setNewToDo(e.target.value)} 
        placeholder='Add a new item' 
      /> &nbsp; &nbsp; &nbsp;<br/>
      <button onClick={addNewTask}>Add Task</button>
      <ul>
        {addTask.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

