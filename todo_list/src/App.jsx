import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TaskForm from './components/TaskForm'
import { useState } from 'react'
import './App.css'


function App() {

  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState(true);

  function handleAddTask(newTask) {
    setTasks(prev => [...prev, newTask]);
  }

  function toggleTaskForm() {
    setAddTask(!addTask);
  }
    
  




  if(tasks.length !== 0 && addTask === false){

  return (
    <div className="app-shell">
      <Header />
      {tasks.map(task =>
        <TodoItem key={task.id} name={task.name} date={task.date} notes={task.notes} />
      )}
      <button onClick={setAddTask(true)}>Add Task</button>
    </div>
  )
  } else if(tasks.length !== 0 && addTask === true) {
    return (
      <div className="app-shell">
      <Header />
      {tasks.map(task =>
        <TodoItem key={task.id} name={task.name} date={task.date} notes={task.notes} />
      )}
      <TaskForm onSubmit={handleAddTask} onClick={toggleTaskForm}/>
    </div>
    )
  } else {
    return (
      <div className="app-shell">
        <Header />
        <h2>You currently have no tasks</h2>
        <TaskForm onSubmit={handleAddTask} onClick={toggleTaskForm}/>
      </div>
    )
  }

}
export default App
