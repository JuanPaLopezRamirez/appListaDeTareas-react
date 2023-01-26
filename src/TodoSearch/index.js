// Usando Composicion de componentes sin React Context

import React from "react";
import './TodoSearch.css'

const TodoSearch =({ searchValue,setSearchValue,loading })=>{

  const onSearchValueChange=(event)=>{
    setSearchValue(event.target.value);
  }

  return (
    <input
      className="TodoSearch-input"
      placeholder='escribe una tarea'
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export {TodoSearch};


/*
import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

const TodoSearch =({ searchValue,setSearchValue })=>{

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
*/