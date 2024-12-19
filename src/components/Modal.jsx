import { useEffect,useRef } from "react";


const Modal = ({ modalTitle, onClose, children }) => {

  const modalRef = useRef(null);

  const handleOverlayClick = () => {
      onClose();
  }

  useEffect(() => {
    const modalEle = modalRef.current;
    modalEle.addEventListener("click",handleOverlayClick)

    return () => {
      modalEle.removeEventListener("click", handleOverlayClick);
    };
    
  },[])

  return (
    <>
        <div className="hide modal-overlay" ref={modalRef}>

        </div>  
          <div className="hide main-wrapper">
      <div className="modal wrapper">
        <div className="header">
          <div className="text">{modalTitle}</div>
          <div className="cross-icon" onClick={onClose}></div>
        </div>
        {children}
      </div>
      </div>
    </>

  );
};

export default Modal;
