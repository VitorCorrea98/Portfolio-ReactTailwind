import React from "react"
import { Link} from "react-router-dom"

export default function Header() {
    return(
            <header className="Header font-Roboto">
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
                <section className="flex justify-center items-center mt-10 flex-col">
                    <h2 className="text-2xl">Hi, I am Mariana, a Product Designer based in Rio de Janeiro.
                    </h2>
                    <ul className="inline-flex gap-32 text-xl mt-10 marker:text-slate-950 list-disc">
                        <li>UX Research</li>
                        <li>UI Design</li>
                        <li>Content Production</li>
                        <li>Consultancy</li>
                    </ul>
                </section>
            </header>
    )
}
