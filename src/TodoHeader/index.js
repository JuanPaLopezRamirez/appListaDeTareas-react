import React from "react";
import './TodoHeader.css'

function TodoHeader({children, loading}){

  return(
    <header className="TodoHeader__container">
      {
        React.Children
          .toArray(children)
          .map(child=> React.cloneElement(child,{loading}))
      }
    </header>
  )
}

export { TodoHeader };



// Usando Children y cloneElement
/*
function TodoHeader({children}){

  return(
    <header className="TodoHeader__container">
      {children}
    </header>
  )
}

export { TodoHeader }; */