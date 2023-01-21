import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){

  const onClickButton=()=>{
    props.setOpenModal(!props.openModal);
    // o de esta forma, tambien lo podemos hacer
    //props.setOpenModal(prevState=>!prevState);
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


//otra forma de hacer lo de arriba es asi=>

// si se usa esta opcion no es necesario que se le pasen
// el openModal y el setOpenModal como props

/* import { TodoContext } from "../TodoContext";
import { useContext } from "react";

function CreateTodoButton(){

  const {openModal,setOpenModal} = useContext(TodoContext);

  const onClickButton=()=>{
    setOpenModal(!openModal);
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

export {CreateTodoButton}; */
