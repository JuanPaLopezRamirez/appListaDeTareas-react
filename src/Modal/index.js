import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({children}){
  return ReactDOM.createPortal(
    <div className='Modal--content'>
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };




// OTRA FORMA DE HACER LO DE ARRIBA
/* import PortalReactDOM from 'react-dom'

function Modal({children}){
    return PortalReactDOM.createPortal(
    children,
    document.getElementById('modal')
    );
}

export {Modal}  */
