// Usando Composicion de componentes sin React Context
import React from "react";
import './TodoCounter.css';

const TodoCounter=({totalTodos,completedTodos,loading})=>{
  return(
    <h2 
      className={`TodoCounter__title ${!!loading && 'TodoCounter__title--opacity'}`}
    >
      completaste {completedTodos} de {totalTodos} tareas
    </h2>
  );
}

export {TodoCounter}; // este tipo de export se llama export nombrado




/*
import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

const TodoCounter=({totalTodos,completedTodos})=>{
  const {totalTodos,completedTodos} = useContext(TodoContext);
  return(
    <h2 className="TodoCounter-title">completaste {completedTodos} de {totalTodos} tareas</h2>
  );
}

export {TodoCounter}; */