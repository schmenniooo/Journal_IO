
import React from 'react';
import './modalEntryView.css'

const Modal = ({ isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>&times;</button>
                <form className="inputForm">
                    <input className="inputBox" type={"text"}/>
                    <input className="inputBox" type={"text"}/>
                </form>
                <button className="saveButton">Save</button>
            </div>
        </div>
    );
};

export default Modal;