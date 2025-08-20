import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo.js";
import { v4 as uuidv4 } from "uuid";
uuidv4();
// Inside ./components/TodoWrapper.js
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  //  SETTING THE TODO FUNCTION 
  const addTodo = (todo) => {

    if (/^\s*$/.test(todo)) {
      alert("type something");
    } else {
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ]);
    }
  };

  // DELETING TODO FUNCTION
const deleteTodo = (value) => {
console.log("it here");

  
  console.log(value);

  let newTodos = todos.slice(value);
  console.log(todos);
  console.log(newTodos)
  

  setTodos(newTodos)

}

  // RETURNING THE COMPONENTS
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};  

export default TodoWrapper;
