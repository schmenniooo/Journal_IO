
import React, {useState} from "react";
import ModalEntryView from "../subComponents/entryView/entryView.jsx";
import './footer.css'

function Footer({ onSaveEntry }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openEditModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleSave = (entry) => {
        if (onSaveEntry) {
            onSaveEntry(entry);
        }
    }

    return (

        <footer className="footer">
            <section className="footerButtonContainer" onClick={openEditModal}>
                <button className="addButton">
                    <img src="/icons/add_icon.png" className="icon" alt="Add entry"/>
                </button>
                New Entry
            </section>
            <ModalEntryView
                isOpen={isModalOpen} 
                onClose={openEditModal}
                onSave={handleSave}
            />
        </footer>
    )
}

export default Footer