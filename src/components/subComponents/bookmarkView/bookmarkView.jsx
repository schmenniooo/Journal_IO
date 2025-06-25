
import './bookmarkView.css'
import DefaultModal from "../model/defaultModal.jsx";

function BookmarkView({isOpen, onCLose, entries}) {

    if (!isOpen) return null;

    return (

        <DefaultModal title="Bookmarked Entries" onClose={onCLose}>
            <ul className="bookmarkList">
                {entries.length === 0 && <li className="bookmarkListItem">No bookmarks yet</li>}
                {entries.map((entry) => (
                    <li className="bookmarkListItem">
                        <section className="bookmarkedEntry" onClick={() => {/*TODO:*/}}>
                            <h3 className="entryTitle">{entry.title}</h3>
                            <div className="entryDate">{entry.date}</div>
                        </section>
                    </li>
                ))}
            </ul>
        </DefaultModal>
    )
}

export default BookmarkView;
