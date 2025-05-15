
import React from 'react';
import './modalEntryView.css'

const Modal = ({ isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h1>Hello</h1>
            </div>
        </div>
    );
};

export default Modal;