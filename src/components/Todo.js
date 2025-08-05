import React from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const toDo = ({ todos }) => {
  return (
    <div>
      {todos.map((val, index) => {
        return (
          <div className="Todo">
            <p key={index}> {val.task} </p>
            <div>
              <FontAwesomeIcon icon={faPenToSquare} />

              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default toDo;
