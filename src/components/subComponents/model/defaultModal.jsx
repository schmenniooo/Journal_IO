
import './defaultModal.css'

function DefaultModal({title, children, onClose}) {

    return (
        <div className="modalOverlay">
            <div className="modal">
                <header className="modalHeader">
                    <h2 className="modalTitle">{title}</h2>
                    <button className="closeButton" onClick={onClose}>×</button>
                </header>
                {children}
            </div>
        </div>
    )
}

export default DefaultModal;
