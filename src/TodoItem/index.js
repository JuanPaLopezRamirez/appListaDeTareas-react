import React from "react";
import './TodoItem.css';

const TodoItem=(props)=>{

  return(
    <li className="TodoItem">
      <span
        onClick={props.onComplete}
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      >
        ✔
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
        {props.text}
      </p>
      <span
        onClick={props.onDelete}
        className="Icon Icon-delete"
      >
        ✖
      </span>
    </li>
  );
}

export {TodoItem};