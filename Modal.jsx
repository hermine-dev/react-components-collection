import React, { useState } from 'react';


const Modal = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false);
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const modalClass = isOpen ? 'modal modal-open' : 'modal';
  const overlayClass = isOpen ? 'overlay overlay-visible' : 'overlay';

  return (
    <div className={modalClass} onAnimationEnd={handleAnimationEnd}>
      <div className={overlayClass} onClick={handleOverlayClick}>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;