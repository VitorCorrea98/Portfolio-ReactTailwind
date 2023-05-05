import { Link } from "react-router-dom";


export default function Header() {
    return(
        <>
        <header className="Header font-Roboto mb-32">
            <div className="flex justify-evenly items-center m-10">
                <h1 className="Mariana"><Link to="/home">Mariana Ribeiro Vaz</Link></h1>
                <nav className="">
                    <ul className="inline-flex gap-9 text-2xl">
                        <li>
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
            </div>
            <h2 className="Mariana mt-10 text-center">Retta Seguros</h2>
        </header>
        </>
    )
}