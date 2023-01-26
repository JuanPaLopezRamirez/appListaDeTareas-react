/* Este useLocalStorage es la copia del useLocalStorage 
de la carpeta TodoContext */

import { useState, useEffect} from "react";

// Custom react Hook
function useLocalStorage(itemName,initialValue){

  const [sincronizedItem,setSincronizedItem] = useState(true);
  const [loading,setLoading]= useState(true);
  const [error,setError]= useState(false);
  const [item, setItem] = useState(initialValue);

  useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);// itemName = TODOS_V1
        let parsedItem;

        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));//LocalStorage solo puede guardar informacion en strings
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);//ya termino de cargar la App
        setSincronizedItem(true);// cargo todo y esta sincronizado
      } catch (error) {
        setError(error);
      }
    },4000);
  },[sincronizedItem]);// por ahora lo dejamos asi, asi EsLint no marque un error


  const saveItem=(newItem)=>{
    try {
      const itemToString = JSON.stringify(newItem);
      localStorage.setItem(itemName,itemToString); //actualizamos el local storage
      setItem(newItem);// actualizamos el estado
    } catch (error) {
      setError(error);
    }
  }

  const sincronizeItem= ()=>{
    setLoading(true); // para estar en el estado de carga
    setSincronizedItem(false); // decimos que no estamos sincronizados
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

export { useLocalStorage };
