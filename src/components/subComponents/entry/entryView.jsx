
import React, { useState, useEffect } from 'react';
import './entryView.css';

const EntryView = ({ isOpen, onClose, entryToEdit = null, onSave }) => {

    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });

    // If an entry is passed for editing, populate the form
    useEffect(() => {
        if (entryToEdit) {
            setFormData({
                title: entryToEdit.title || '',
                content: entryToEdit.content || ''
            });
        } else {
            // Reset form when creating a new entry
            setFormData({
                title: '',
                content: ''
            });
        }
    }, [entryToEdit, isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (!formData.title.trim() || !formData.content.trim()) {
            alert('Please fill in both title and content');
            return;
        }

        // Create an entry object
        const entry = {
            id: entryToEdit?.id || Date.now(), // Use existing ID or create new one
            title: formData.title.trim(),
            content: formData.content.trim(),
            date: entryToEdit?.date || new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            bookmarked: entryToEdit?.bookmarked || false
        };

        // Pass the entry to a parent component
        if (onSave) {
            onSave(entry);
        }

        // Close the modal
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h3 className="modal-title">{entryToEdit ? 'Edit Entry' : 'New Entry'}</h3>

                <form className="inputForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input 
                            className="inputBox" 
                            type="text" 
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter a title"
                            autoFocus
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea 
                            className="inputBox" 
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            placeholder="Write your thoughts here..."
                        />
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancelButton" onClick={onClose}>Cancel</button>
                        <button type="submit" className="saveButton">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EntryView;
