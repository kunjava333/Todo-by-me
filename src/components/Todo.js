import React, { useState } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({ todos, deleteTodo }) => {
  const [value, setValue] = useState(0);

  const run = () => {
    deleteTodo(value);
    setValue(0)
    console.log("here too");
    
    console.log(value);
    
  }

  return (
    <div>
      {todos.map((val, index) => {
       
        return (
          
          <div key={index} className="Todo">
             <h1> {index}</h1>
            <p> {val.task} </p> 
            <div>
              <FontAwesomeIcon icon={faPenToSquare} />

              <FontAwesomeIcon icon={faTrash} onClick={() =>  {
                setValue(index)
                run();
              }  } />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToDo;
