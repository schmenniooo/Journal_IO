
import React from 'react';
import './modalEntryView.css'

const Modal = ({ isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>&times;</button>
                <section>
                    <input type={"text"}/>
                    <input type={"text"}/>
                </section>
                <button>Save</button>
            </div>
        </div>
    );
};

export default Modal;