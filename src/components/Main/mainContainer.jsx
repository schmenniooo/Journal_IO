
import './main.css'

function MainContainer() {

    return (

        <main className='main-container'>
            <ul className="journalList">
                <li className="journalListItem">
                    <section className="journalEntry">
                        <h4 className="journalHeading">Title</h4>
                        <p className="journalContent">Content</p>
                        <label className="journalDate">Created</label>
                    </section>
                </li>
                <li className="journalListItem">
                    <section className="journalEntry">
                        <h4 className="journalHeading">Title</h4>
                        <p className="journalText">Content</p>
                        <label className="journalDate">Created</label>
                    </section>
                </li>
            </ul>
        </main>
    )
}

export default MainContainer;