import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

const TodoSearch =()=>{

  const { searchValue,setSearchValue } = useContext(TodoContext);

  const onSearchValueChange=(event)=>{
    setSearchValue(event.target.value);
  }

  return (
    <input
      className="TodoSearch-input" 
      placeholder='escribe una tarea'
      value={searchValue}
      onChange={onSearchValueChange} 
    />
  );
}

export {TodoSearch};