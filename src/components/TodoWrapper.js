import React, { useState } from 'react';
import TodoForm from './TodoForm'
import Todo from './Todo.js'
import { v4 as uuidv4 } from 'uuid';
uuidv4();
// Inside ./components/TodoWrapper.js
const TodoWrapper = () => {
  const [todos, setTodos] = useState([])
  const [message, setMessage] = useState("")
  const addTodo = todo  => {
    if(todo === undefined){
      alert("type something")
      // setMessage("So you gonna do nothing instead of something")
    }
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
  }


      
  return (<div className='TodoWrapper'>
    <TodoForm addTodo={addTodo} />
    <Todo todos = {todos} />
  </div>);
};


export default TodoWrapper;
