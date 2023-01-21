import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){

  const {addTodo, setOpenModal} = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState('');

  const onCancel=()=>{
    setOpenModal(false);
  }

  const onSubmit=(event)=>{
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  const onChangeText=(event)=>{
    setNewTodoValue(event.target.value);
  }

  return(
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva Tarea</label>
      <textarea
        onChange={onChangeText}
        value={newTodoValue}
        placeholder="Organizar la casa!"
      >
      </textarea>

      <div className="TodoForm__buttonContainer">
        <button
          className="TodoForm__button TodoForm__button--cancel"
          type="button"
          onClick={onCancel}>
          Cancelar
        </button>
        <button
          className="TodoForm__button TodoForm__button--add"
          type="submit"
        >
          Añadir Tarea
        </button>
      </div>
    </form>
  );
}

export { TodoForm };