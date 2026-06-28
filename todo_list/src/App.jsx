import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTask from './components/AddTask'
import './App.css'


function App() {

  const tasks = []

  if(tasks.length !== 0){

  return (
    <div>
      <Header />
      <AddTask />
      {tasks.map(task =>
        <TodoItem key={task.id} name={task.name} date={task.date} notes={task.notes} />
      )}
    </div>
  )
  } else {
    return (
      <div>
        <Header />
        <AddTask />
        <h2>You currently have no tasks</h2>
      </div>
    )
  }
}

export default App
