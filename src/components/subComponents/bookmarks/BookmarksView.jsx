
import './BookmarksView.css'
import DefaultModal from "../model/DefaultModal.jsx";

function BookmarksView({isOpen, onCLose, entries, setSearchedEntry}) {

    const handleClickOn = (e, entry) => {
        e.preventDefault();
        setSearchedEntry(entry.title);
        onCLose();
    }

    if (!isOpen) return null;

    return (

        <DefaultModal title="Bookmarked Entries" onClose={onCLose}>
            <ul className="bookmarkList">
                {entries.length === 0 && <li className="bookmarkListItem">No bookmarks yet</li>}
                {entries.map((entry) => (
                    <li key={entry.id} className="bookmarkListItem">
                        <section className="bookmarkedEntry" onClick={(event) => handleClickOn(event, entry)}>
                            <h3 className="entryTitle">{entry.title}</h3>
                            <div className="entryDate">{entry.date}</div>
                        </section>
                    </li>
                ))}
            </ul>
        </DefaultModal>
    )
}

export default BookmarksView;
