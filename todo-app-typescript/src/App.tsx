import './App.css'
import Navbar from './component/Navbar'
import AddToDo from './component/AddToDo'
import Todos from './component/Todos'

function App() {

  return (
    <main>
      <h1>TODO APP</h1>
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  )
}

export default App
