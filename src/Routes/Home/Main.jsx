import { Link } from "react-router-dom";

export default function Main() {
    return(
        <section className="Project-Section mb-80">
            <ul className=" flex flex-col gap-60">
                <li className="Project-Section">
                    <Link to="/retta-seguros">
                        <img src="/Pictures/Home/RettaSeguros-Project.png" alt="RettaSeguros" className="rounded-2xl hover:opacity-30"/>
                    </Link>
                    <div className="Project-Title">
                        <p className="font-medium font-Oswald">Retta Seguros</p>
                        <p className="font-Roboto">Website Redesign</p>
                    </div>
                </li>
                <li className="Project-Section">
                    <img src="/Pictures/Home/RettaSeguros-Project.png" alt="" className="rounded-2xl" />
                    <div className="Project-Title">
                        <p className="font-medium font-Oswald">Retta Seguros</p>
                        <p className="font-Roboto">Website Redesign</p>
                    </div>
                </li>
                <li className="Project-Section">
                    <img src="/Pictures/Home/RettaSeguros-Project.png" alt="" className="rounded-2xl" />
                    <div className="Project-Title">
                        <p className="font-medium font-Oswald">Retta Seguros</p>
                        <p className="font-Roboto">Website Redesign</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}