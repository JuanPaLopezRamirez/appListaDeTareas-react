import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

function ChangeAlert({sincronize}){

  const {show, toggleShow}= useStorageListener(sincronize);

  if(show){
    return(
      <div className="ChangeAlert__bg">
        <div className="ChangeAlert__container">
          <div className="ChangeAlert--content">
            <p>Hay nuevos cambios, al parecer cambiaste algo...</p>
            <p>Haz Click para actualizar la app</p>

            <button 
              className="ChangeAlert-Button--update"
              onClick={()=> toggleShow(false)}
            >
              Actualizar
            </button>
          </div>
        </div>
      </div>
    );
  } else{
    return null;
  }
}


export { ChangeAlert };




/*
import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css';

function ChangeAlert({show, toggleShow}){
  if(show){
    return(
      <div className="ChangeAlert__bg">
        <div className="ChangeAlert__container">
          <div className="ChangeAlert--content">
            <p>Hay nuevos cambios, al parecer cambiaste algo...</p>
            <p>Haz Click para actualizar la app</p>

            <button
              className="ChangeAlert-Button--update"
              onClick={()=> toggleShow(false)}
            >
              Actualizar
            </button>
          </div>
        </div>
      </div>
    );
  } else{
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);


export { ChangeAlertWithStorageListener }; */