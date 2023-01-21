import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

const TodoCounter=()=>{
  const {totalTodos,completedTodos} = useContext(TodoContext);
  return(
    <h2 className="TodoCounter-title">completaste {completedTodos} de {totalTodos} tareas</h2>
  );
}

export {TodoCounter}; // este tipo de export se llama export nombrado