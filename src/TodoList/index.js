import React from "react";
import './TodoList.css';

const TodoList=({children})=>{
  return(
    <section className="TodoList-section">
      <ul>
        {children}
      </ul>
    </section>
  );
}

export {TodoList};