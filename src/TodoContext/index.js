import React, { useState, createContext } from "react";
import { useLocalStorage } from './useLocalStorage';


const TodoContext= createContext();

function TodoProvider(props){
  //como usamos un objeto tenemos que avisarle que item ahora es todos ...
  const {item:todos,saveItem:saveTodos,loading,error}= useLocalStorage('TODOS_V1',[]);

  const [searchValue,setSearchValue] = useState('');

  const completedTodos = todos.filter(todo=> !!todo.completed).length;
  const totalTodos = todos.length;

  // array que vamos a usar para renderizar las tareas
  let searchedTodos =[];

  if(!searchValue.length >=1){
    searchedTodos = todos;
  } else{
    searchedTodos = todos.filter(todo=>{
      const todoText= todo.text.toLowerCase();// comparamos este texto
      const searchText = searchValue.toLowerCase(); // comparamos este texto
      return todoText.includes(searchText);
    })
  }


  const completeTodo=(texto)=>{
    const todoIndex = todos.findIndex(todo=> todo.text ===texto);
    const newTodos = [...todos];
    newTodos[todoIndex].completed= true;
    saveTodos(newTodos);
  };

  const deleteTodo=(texto)=>{
    const todoIndex = todos.findIndex(todo=> todo.text ===texto);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return(
    <TodoContext.Provider value={{
      /*valores a compartir*/
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };