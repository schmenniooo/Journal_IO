
import React, {useState} from "react";
import ModalEntryView from "../modals/editEntryModal/modalEntryView.jsx";
import './footer.css'

function Footer() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openEditModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (

        <footer className="footer">
            <section className="footerButtonContainer" onClick={openEditModal}>
                <button className="addButton"><img src="/add_icon.png" className="icon" alt="Add enty"/></button>
                New Entry
            </section>
            <ModalEntryView isOpen={isModalOpen} onClose={openEditModal}></ModalEntryView>
        </footer>
    )
}

export default Footer