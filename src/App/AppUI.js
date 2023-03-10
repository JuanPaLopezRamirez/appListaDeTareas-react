// EN COMPOSICION DE COMPONENTES SIN REACT CONTEXT 
// NO REQUERIMOS DEL COMPONENTE AppUI

/* import React, { useContext } from 'react';
import { TodoContext  } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal/index';
import { TodoForm } from '../TodoForm';
import { TodoError } from '../TodoError/index';
import { TodoLoading } from '../TodoLoading/index';
import { EmptyTodo } from '../EmptyTodo/index';
import { TodoHeader } from '../TodoHeader/index';


// este componente contiene toda la UI de la aplicacion
// hace el llamado a todos los componentes que usamos
function AppUI(){
  const {error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    } = useContext(TodoContext); // recibimos el contexto

  return(
    <React.Fragment>

      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList>
        {error && <TodoError error={error} />}
        {loading && <TodoLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodo />}

        {searchedTodos.map(todo=>(
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} 
            onComplete={()=> completeTodo(todo.text)}
            onDelete={()=> deleteTodo(todo.text)}
          />
          ))
        }
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </React.Fragment>
  );
}

export {AppUI}; */