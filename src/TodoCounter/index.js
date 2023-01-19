import React from "react";
import './TodoCounter.css';

const TodoCounter=({total,completed})=>{
  return(
    <h2 className="TodoCounter-title">completaste {completed} de {total} tareas</h2>
  );
}

export {TodoCounter}; // este tipo de export se llama export nombrado