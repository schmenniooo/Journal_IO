
import './bookmarkView.css'
import DefaultModal from "../model/defaultModal.jsx";

function BookmarkView({isOpen, onCLose}) {

    if (!isOpen) return null;

    return (

        <DefaultModal title="Bookmarked Entries" onClose={onCLose}>
            <ul className="bookmarkList">

            </ul>
        </DefaultModal>
    )
}

export default BookmarkView;
