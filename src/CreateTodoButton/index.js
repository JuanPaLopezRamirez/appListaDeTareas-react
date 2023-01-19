import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){

  const onClickButton=()=>{
    console.log('aqui se deberia abrir el modal');
  }

  return(
    <button 
      className="CreateTodoButton-button"
      onClick={onClickButton}
    >
      +
    </button>
  )
}

export {CreateTodoButton};