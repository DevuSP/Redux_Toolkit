import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector } from 'react-redux'


function App() {
  const todos = useSelector(state => state.todos); // initialvalues.
  console.log(todos);
  return (
    <>

      <AddTodo />
      <div>Todos</div>
      <ul className="list-none">

        {todos?.map((element) =>
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={element.id}
          >
            <Todos todo={element}/>
          </li>
        )}
      </ul>
    </>
  )
}

export default App
