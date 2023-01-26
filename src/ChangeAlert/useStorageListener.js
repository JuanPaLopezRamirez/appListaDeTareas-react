import React from "react";

// convertimos la HOF a un react hook
//HOC => react hook
function useStorageListener(sincronize){
    const [storageChange,setStorageChange] = React.useState(false);

    window.addEventListener('storage',(change)=>{
      if(change.key=== 'TODOS_V1'){
        console.log('hubo cambios en TODO_V1');
        setStorageChange(true);
      }
    });

    const toggleShow =()=>{
      sincronize();
      setStorageChange(false);
    }

    return {
      show:storageChange,
      toggleShow
    };
}

export { useStorageListener };

/* //HOC - high order component
function withStorageListener(WrappedComponent){//WrappedComponent === ChangeAlert()
  return  function WrappedComponentWithStorageListener(props){
    const [storageChange,setStorageChange] = React.useState(false);

    window.addEventListener('storage',(change)=>{
      if(change.key=== 'TODOS_V1'){
        console.log('hubo cambios en TODO_V1');
        setStorageChange(true);
      }
    });

    const toggleShow =()=>{
      props.sincronize();
      setStorageChange(false);
    }

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
        />
    );
  }
}

export { withStorageListener }; */


