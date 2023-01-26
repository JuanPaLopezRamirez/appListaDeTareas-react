// Usando Render Props
import React from "react";
import './TodoList.css';

const TodoList=(props)=>{
  const renderFunc = props.children || props.render;

  return(
    <section className="TodoList-section">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

      {(!props.loading && !props.error ) && props.searchedTodos.map(renderFunc)}

      {/* <ul>
        {props.children}
      </ul> */}
    </section>
  );
}

export {TodoList};




// Antes de usar Render props
/* 
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

export {TodoList}; */