const Modal = ({showModal,onClose}) => {
  return (
    <div className="hide">
      <h2>Modal</h2>
      <button onClick={onClose}>Close Modal</button>
    </div>
  );
};

export default Modal;
