
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
                    <textarea className="inputBox"/>
                    <button className="saveButton" type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;