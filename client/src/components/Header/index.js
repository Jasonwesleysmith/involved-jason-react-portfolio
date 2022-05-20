import React from 'react'

const Header = ({page, setPage}) => {
    return (
        <header>
            <nav>
                <ul>
                    <li className="navLink" style={{color: page === "About" ? "#fff" : "#aaa" }} onClick={()=>setPage("About")}>
                        About
                    </li>
                    <li className="navLink" style={{color: page === "Portfolio" ? "#fff" : "#aaa" }} onClick={()=>setPage("Portfolio")}>
                        Portfolio
                    </li>
                    <li className="navLink" style={{color: page === "Contact" ? "#fff" : "#aaa" }} onClick={()=>setPage("Contact")}>
                        Contact
                    </li>
                </ul>
            </nav>    
            <section className="photo-greeting">
            <img className="profile-picture" src="/images/Me2.jpeg" alt="Jason is smiling and being awesome"/>
            <h1>
                <a href="/images/Me.jpeg"><span className="involvedTitle">Involved</span><span className="involvedTitle">Jason</span></a>
            </h1>
        </section>
        </header>
    )
}

export default Header
