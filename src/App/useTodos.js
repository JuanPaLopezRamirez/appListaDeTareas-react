import { useState } from "react";
import { useLocalStorage } from './useLocalStorage';


function useTodos(){
  const {
    item:todos,
    saveItem:saveTodos,
    loading,
    error,
    sincronizeItem:sincronizeTodos,
  }= useLocalStorage('TODOS_V1',[]);
  const [searchValue,setSearchValue] = useState('');
  const [openModal,setOpenModal] = useState(false);

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

  const addTodo=(text)=>{
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });

    saveTodos(newTodos);
  }

  const deleteTodo=(texto)=>{
    const todoIndex = todos.findIndex(todo=> todo.text ===texto);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return(
    {/*propiedades guardadas en nuestro custom Hook*/
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
      sincronizeTodos
    }
  );
}

export { useTodos };