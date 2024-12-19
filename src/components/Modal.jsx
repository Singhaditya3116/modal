const Modal = ({ modalTitle, onClose, children }) => {
  return (
    <div className="hide modal wrapper">
      <div className="header">
        <div className="text">{modalTitle}</div>
        <div className="cross-icon" onClick={onClose}></div>
      </div>
      {children}
    </div>
  );
};

export default Modal;
