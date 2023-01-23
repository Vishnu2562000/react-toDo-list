import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const [taskList,setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [inputData, setInputData] = useState('');
  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = (event) => {
    const task = {
      id: taskList.length == 0 ? 1 : taskList[taskList.length - 1].id + 1,
      taskName: newTask
    }
    setTaskList([...taskList,task]);
    document.getElementById('input-data').value = '';
  }

  const deleteTask = (id) =>{
    setTaskList(
      taskList.filter((task) => task.id !== id)
    )
  }

  return (
    <div className="App">
      <h1 className="header">TO DO LIST</h1>
      <div className="add-task">
        <input className="input-box" placeholder="Type your task here" onChange={handleChange} id="input-data"/>
        <button className="add-button" onClick={addTask} >Add</button>
      </div>
      <div className="task-list">
        {taskList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
