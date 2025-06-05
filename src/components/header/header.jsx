
import './header.css'

function Header(){

    return (

        <header className="header">
            <h1 className="mainHeading">Journal</h1>
            <section className="buttonContainer">
                <button className="optionsButton"><img src="/icons/search_icon.png" className="icon" alt="search"/></button>
                <button className="optionsButton"><img src="/icons/options.png" className="icon" alt="options"/></button>
            </section>
        </header>
    )
}

export default Header