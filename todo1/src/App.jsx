import { useState } from 'react'
import './App.css'
import AddTodo from './component/AddTodo.jsx'
import TodoList from './component/TodoList.jsx'

function App() {

  const [todos, setTodos] = useState([]); // State for todo list

  // Add todo
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: todo,
        completed: false
      }
    ])
  }

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Toggle todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div className="text-center bg-slate-800 w-screen h-screen">
      <div className='w-11/12 bg-slate-600 h-full mx-auto p-8'>
        <h1 className="text-5xl text-white font-bold mt-8 mb-8">Todo App</h1>
        <AddTodo addTodo={addTodo}  />
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      </div>
    </div>
  )
}

export default App
