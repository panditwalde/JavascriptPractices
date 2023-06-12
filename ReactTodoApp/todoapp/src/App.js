// import "./styles.css";
import {useState} from 'react'
function App() {

 const [todos, setTodos] = useState([]);
 const [input, setInput] = useState('');
 const [editingIndex, setEditingIndex] = useState(null);
 const [editingText, setEditingText] = useState('');

 const addTodo = (event) => {
  event.preventDefault();
  setTodos([...todos, input]);
  setInput('');
 };

 const deleteTodo = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
 };

 const editTodo = (index) => {
  setEditingIndex(index);
  setEditingText(todos[index]);
 };

 const updateTodo = (event) => {
  event.preventDefault();
  const newTodos = [...todos];
  newTodos[editingIndex] = editingText;
  setTodos(newTodos);
  setEditingIndex(null);
  setEditingText('');
 };

 return (
  <div>
   <h1>ToDo List</h1>
   <form>
    <input value={input} onChange={(event) => setInput(event.target.value)} />
    <button disabled={!input} type="submit" onClick={addTodo}>Add ToDo</button>
   </form>
   <ul>
    {todos.map((todo, index) => (
     <li key={index}>
      {index === editingIndex ?
       <form onSubmit={updateTodo}>
        <input value={editingText} onChange={(event) => setEditingText(event.target.value)} />
        <button type="submit">Save</button>
        <button type="button" onClick={() => setEditingIndex(null)}>Cancel</button>
       </form>
       :
       <>
        {todo}
        <button onClick={() => editTodo(index)}>Edit</button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
       </>
      }
     </li>
    ))}
   </ul>
  </div>
 );
}

export default App;