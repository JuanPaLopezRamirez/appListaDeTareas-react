// Ejemplo de un high order component

import React from 'react';

function App(props){
  return(
    <h1>!{props.saludo}, {props.name}</h1>
  );
}

// Wrapped significa envuelto

// high order component
function withSaludo(WrappedComponent){
  return function WrappedComponentWhitSaludo(saludo){
    return function ComponenteDeVerdad(props){
      return(
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrappedComponent</p>
        </React.Fragment>
      );
    }
  }
}


const AppWhitWhatever = withSaludo(App)('Hola papu');


<AppWhitWhatever  name="Juanpa" />