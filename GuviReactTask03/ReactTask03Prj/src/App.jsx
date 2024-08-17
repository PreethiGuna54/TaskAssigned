import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoDisplay from './TodoTask/TodoDisplay'
import { allTodo } from './utils/TodoData'
import TodoMap from './TodoTask/TodoMap'
import TodoStore from './TodoTask/TodoStore'

function App() {
 const [todoList,setTodoList]=useState(allTodo)

  return (
    <>
     <TodoDisplay todoList={todoList} setTodoList={setTodoList} /><p></p>
     <TodoMap todoList={todoList} setTodoList={setTodoList} />
    </>
  )
}

export default App
