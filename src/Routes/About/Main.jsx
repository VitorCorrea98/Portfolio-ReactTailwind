function Profile() {
    return(
        <section className="Alinhamento8">
            <h2 className="text-5xl font-Oswald font-light col-start-3 col-span-3 self-center">Creating digital experiences with<br /> empathy and innovation. Always looking<br /> for new challenges, always learning,<br /> always creating.</h2>
            <img src="/Pictures/About/Mari-profile.png" alt="Profile" className="max-w-none"/>
        </section>
    )
}

function Experiences() {
    return(
        <section className="Alinhamento4 mt-24">
            <div className="col-start-2 space-y-6 ">
                <p className="text-3xl font-Oswald">WHAT I DO</p>
                <ul className="space-y-5 font-Roboto text-2xl">
                    <li>Experience Design</li>
                    <li>Content Creation</li>
                    <li>Product Strategy</li>
                    <li>Consultancy</li>
                </ul>
            </div>
            <div className="space-y-6">
                <p className="text-3xl font-Oswald">TOOLS</p>
                <ul className="space-y-5 font-Roboto text-2xl">
                    <li>Figma</li>
                    <li>Zeplin</li>
                    <li>Miro</li>
                    <li>Lookback</li>
                    <li>Protopie</li>
                    <li>Notion</li>
                    <li>Slack</li>
                </ul>
            </div>
        </section>
    )
}

function Me() {
    return (
        <main className="Alinhamento4 space-y-3 mt-32 mb-80">
            <h3 className="col-start-2 text-3xl font-Oswald">ME</h3>
            <p className="col-start-2 col-span-2 text-2xl font-Roboto ">Creating amazing for people has always been a drive for me. With that my work spans different disciplines — from International Relations, Business Management to UX Design.  Studying these fields helped me to better understand and design for a wide range of users with different backgrounds and cultural contexts. as well as providing a more comprehensive understanding of the business world and the role of design within it</p>
        </main>
    )
}

export default function Main() {
    return(
        <>
            <Profile />
            <Experiences />
            <Me/>
        </>
    )
}