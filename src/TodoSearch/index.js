import React from "react";
import './TodoSearch.css'

const TodoSearch =({searchValue, setSearchValue})=>{

  // const [searchValue,setSearchValue] = useState('');

  const onSearchValueChange=(event)=>{
    // console.log(event.target.value);
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