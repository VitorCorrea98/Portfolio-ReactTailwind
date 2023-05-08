function Role() {
  return (
    <section className="Alinhamento8 text-2xl mb-40 font-Roboto">
        <p className="col-start-3 col-span-4">Redesign the company's website focusing on improving usability and design. An assessment of heuristics in the current design was conducted, as well as the alignment of customer expectations with the aim of incorporating it into a more modern design.</p>
      <div className="col-start-4 row-start-2 col-span-2 space-y-10 mt-20 mb-40">
        <p><strong>Role: </strong>UI Designer</p>
        <p><strong>Deliverables: </strong>Deliverables: User stories, personas, survey, heuristics, wireframes, Competitor Analysis, Design using Figma</p>
        <p><strong>Timeline: </strong>December 2022 - April 2023</p>
      </div>
      <div className="col-start-3 row-start-4 col-span-4 space-y-20">
        <p>The project was based on the double diamond methodology</p>
        <img src="/Pictures/RettaSeguros/Role/Picture1.png" alt="" />
      </div>
    </section>
  )
}

function Research() {
  return(
    <>
    <section className="Alinhamento8 font-Roboto">
      <div className="col-start-3 col-span-4 space-y-8">
        <p className="text-3xl"><strong>Research</strong></p>
        <p className="text-2xl">The client already had a website but not yet launched. He wanted to update the website design according to business and consumer needs as well as promote content, news related to the insurance market.</p>
      </div>
      <div className="col-start-3 col-span-3 space-y-20 mt-20 ml-40">
        <img src="/Pictures/RettaSeguros/Research/Picture-1.png" alt="Picture1" />
        <img src="/Pictures/RettaSeguros/Research/Picture-2.png" alt="Picture2" />
      </div>
    </section>
    </>
  )
}

function Competitor() {
  return(
    <>
    <section className="Alinhamento8 space-y-8 font-Roboto">
      <p className="col-start-3 text-3xl col-span-4"><strong>Competitor Analysis</strong></p>
      <img src="/Pictures/RettaSeguros/Competitor/Picture1.png" alt="" className="col-start-3 col-span-3 space-y-20 mt-20 ml-40"/>
    </section>
    </>
  )
}

function DesignAtual() {
  return (
    <section className="Alinhamento8 space-x-6 gap-x-8 gap-y-6 mt-20 font-Roboto">
      <p className="col-start-3 text-3xl col-span-4"><strong>Current Design: Retta Seguros</strong></p>
      <img src="/Pictures/RettaSeguros/Design-Atual/Superior-Esquerda.png" alt="Foto" className="CurrentDesign-Esquerda"/>
      <img src="/Pictures/RettaSeguros/Design-Atual/Superior-Direita.png" alt="Foto" className="CurrentDesign-Direita"/>
      <img src="/Pictures/RettaSeguros/Design-Atual/Inferior-Esquerda.png" alt="Foto" className="CurrentDesign-Esquerda row-start-3" />
      <img src="/Pictures/RettaSeguros/Design-Atual/Inferior-Direita.png" alt="Foto" className="CurrentDesign-Direita row-start-3" />
    </section>
  )
}
  
function Evaluation() {
  return (
    <section className="Alinhamento8 text-2xl mt-32 font-Roboto">
      <div className="col-start-3 col-span-4">
        <p className="mb-4"><strong>Heuristics Evaluation </strong></p>
        <p className="mb-2"><ins>Aesthetics and minimalist design: Bad</ins></p>
        <ul className="marker:text-slate-950 list-disc ml-10">
          <li>
            <p className="">A lot of information on the home and insurance information page</p>
          </li>
        </ul>
        <p className="mt-8"><ins>Consistency and Standardization: Bad</ins></p>
        <ul className="marker:text-slate-950 list-disc ml-10 mt-4 space-y-2">
          <li><p>Certain items catch the user&apos;s attention but are not clickable.</p></li>
          <li><p>Navigation problems</p></li>
        </ul>
      </div>
    </section>
  )
}

function Design() {
  return(
    <>
      <section className="Alinhamento8 mt-20 text-2xl space-y-10 font-Roboto">
        <p className="col-start-3"><strong>Design</strong></p>
        <div className="col-start-3 col-span-3 ml-4 grid items-center">
          <img src="/Pictures/RettaSeguros/Design/Picture1.png" alt="" className="FotoLarguraPadrao"/>
          <img src="/Pictures/RettaSeguros/Design/Picture2.png" alt="" className="FotoLarguraPadrao"/>
        </div>
        <div className="col-start-3 col-span-4 ml-4 grid gap-10 items-center">
          <img src="/Pictures/RettaSeguros/Design/Superior-Esquerdo.png" alt="Foto1" className="FotoLarguraPadrao" />
          <img src="/Pictures/RettaSeguros/Design/Superior-Meio.png" alt="Foto2"  className="FotoLarguraPadrao" />
          <img src="/Pictures/RettaSeguros/Design/Superior-Direito.png" alt="Foto3" className="FotoLarguraPadrao" />
        </div>

        <div className="col-start-3 col-span-3 ml-4 grid gap-72 items-center">
          <img src="/Pictures/RettaSeguros/Design/Inferior-Esquerdo.png" alt="Foto4" className="FotoLarguraPadrao col-span-2 col-start-1 max-w-none" />
          <img src="/Pictures/RettaSeguros/Design/Inferior-Direito.png" alt="Foto5" className="FotoLarguraPadrao col-start-3 max-w-none" />
        </div>

        <ul className="col-start-3 col-span-4 marker:text-slate-950 list-disc mt-14 space-y-10 ml-6">
          <li>The purpose of this redesign was to improve navigation and help user find information faster.</li>

          <li>The user can search for the insurance they want directly, in addition to obtaining more information about insurance and better evaluating which type of insurance to purchase.</li>

          <li>Additional information page has been added, based on the client's objectives and the survey conducted during the survey. Thus, users can consult additional relevant information about the type of insurance they are looking for on the website itself.</li>
        </ul>
      </section>
    </>
  )
}

function DesignSystem() {
  return(
    <>
      <section className="Alinhamento8 text-2xl mt-20 space-y-10 mb-40 font-Roboto">
        <p className="col-start-3 col-span-3"><strong>Design System</strong></p>
        <img src="/Pictures/RettaSeguros/Design-System/Picture.png" alt="Picture1" className="col-start-3 col-span-2"/>
        <div className="col-start-3 col-span-4 space-y-4">
          <p><strong>What I learned and next steps...</strong></p>
          <ul className="marker:text-slate-950 list-disc ml-8 space-y-2">
            <li>The current design presents more information regarding insurance and about the Brazilian insurance market.</li>
            <li>In addition, the site will be updated as more insurance types are added according to customer needs.</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default function Main() {
  return(
    <>
        <Role />
        <Research />
        <Competitor />
        <DesignAtual />
        <Evaluation />
        <Design />
        <DesignSystem />
    </>
    )
}