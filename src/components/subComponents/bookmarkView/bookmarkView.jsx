
import './bookmarkView.css'
import DefaultModal from "../model/defaultModal.jsx";

function BookmarkView({isOpen, onCLose, entries}) {

    if (!isOpen) return null;

    return (

        <DefaultModal title="Bookmarked Entries" onClose={onCLose}>
            <ul className="bookmarkList">
                {entries.map((entry) => (
                    <li className="bookmarkListItem">
                        <section className="bookmarkedEntry" onClick={() => {/*TODO:*/}}>
                            <span className="entryID">{entry.id}</span>
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
