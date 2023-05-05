import { Link } from "react-router-dom";


export default function Header() {
    return(
        <>
        <header className="Header">
            <nav className="flex justify-evenly items-center font-Roboto m-10">
                <h2 className="Mariana invisible">Mariana Ribeiro Vaz</h2>
                <ul className="flex justify-end gap-9 text-2xl">
                    <li className="text-gray-400">
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <a href="#section-resume">Resume</a>
                    </li>
                    <li>
                        <a href="#section-contact">Contact</a>
                    </li>
                </ul>
            </nav>
                <h1 className="Mariana mt-10 text-center"><Link to="/home">Mariana Ribeiro Vaz</Link></h1>
        </header>
        <hr/>
        </>

    )
}