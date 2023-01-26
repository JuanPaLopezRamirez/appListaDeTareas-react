// Usando Composicion de componentes sin React Context
import React from 'react';
import './App.css';
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
import { useTodos } from './useTodos';
// import { ChangeAlertWithStorageListener } from '../ChangeAlert/index';
import { ChangeAlert } from '../ChangeAlert/index';





function App() {
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
    addTodo,
    sincronizeTodos
    } = useTodos(); //usando el hook useTodos

  return(
    <React.Fragment>

      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        // render props
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodo />}
        onEmptySearchResults={(searchText)=>
          <p>No hay resultados para: {searchText}</p>
        }
        // render={todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {todo => (// render Functions
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>


      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />

      <ChangeAlert //ChangeAlertWithStorageListener
        sincronize={sincronizeTodos}
      />
      
    </React.Fragment>
  );
}

export default App;



// Antes de las render props y las render functions
// asi se veia el componente <TodoList></TodoList>
/*
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
</TodoList> */


/* 
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App; */

/*
// ASI SE HACE LA COMPOSICION DE COMPONENTES
// PARA NO TENER QUE PASAR PROPS DEL PADRE A LOS HIJOS Y A LOS HIJOS DE LOS HIJOS
function App(){
  const [state,setState]= useState('estado compartido');
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>

      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </React.Fragment>
  );
}

function TodoHeader({children}){
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

function TodoList({children}){
  return (
    <section className='TodoList__container'>
      {children}
    </section>
  );
}

function TodoCounter(){
  return <p>TodoCounter</p>;
}

function TodoSearch(){
  return <p>TodoSearch</p>;
}

function TodoItem({state}){
  return <p>TodoItem: {state}</p>;
} */
