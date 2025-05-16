
import './main.css'

function MainContainer() {

    return (

        <main className='main-container'>
            <ul className="journalList">
                <li className="journalListItem">
                    <section className="journalEntry">
                        <h4>Title</h4>
                        <p>Content</p>
                        <label>Created</label>
                    </section>
                </li>
                <li className="journalListItem">
                    <section className="journalEntry">
                        <h4>Title</h4>
                        <p>Content</p>
                        <label>Created</label>
                    </section>
                </li>
            </ul>
        </main>
    )
}

export default MainContainer;