
import './DefaultModal.css'

function DefaultModal({title, children, onClose}) {

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <div className="modalOverlay" onClick={handleBackdropClick}>
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
