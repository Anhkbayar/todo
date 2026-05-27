import { useState } from 'react'
import './App.css'
function Todos({todos}: {todos: string[]}) {
  const [todoList, setTodoList] = useState(todos);

   const removeTodo = (indexToRemove: number) => {
    setTodoList(
      todoList.filter((_, index) => index !== indexToRemove)
    );
  }
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <input 
            type="checkbox"
            onChange={() => {removeTodo(index)
            }} />
          </li>
      ))}
    </ul>
  )
}

function AddItem({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = useState('')
  return (
    <div>
      <input
        type="text"
        placeholder='Add a new todo'
        value={text}
        onChange={(e) => setText(e.target.value)} />
      <button onClick={() => {
        if(text.trim() === '') return;
        onAdd(text); 
        setText(''); }}> Add</button>
    </div>
  )
}


function App() {
  const [todos, setTodos] = useState<string[]>([]);
  return (
    <>
      <h1>Todo List</h1>
      <AddItem onAdd={(text) => setTodos([...todos, text])}/>
      <Todos todos={todos} />
    </>
  )
}

export default App
