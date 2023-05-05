function Role() {
  return (
    <section className="Alinhamento8 text-2xl">
        <p className="col-start-3 col-span-4">Redesign the company's website focusing on improving usability and design. An assessment of heuristics in the current design was conducted, as well as the alignment of customer expectations with the aim of incorporating it into a more modern design.</p>
      <div className="col-start-4 row-start-2 col-span-3 space-y-10 mt-20 mb-40">
        <p><strong>Role: </strong>UI Designer</p>
        <p><strong>Deliverables: </strong>Deliverables: User stories, personas, survey, heuristics, wireframes, Competitor Analysis, Design using Figma</p>
        <p><strong>Timeline: </strong>December 2022 - April 2023</p>
      </div>
        <p className="col-start-2 row-start-3 col-span-6">The project was based on the double diamond methodology</p>
        <img src="/Pictures/RettaSeguros/Role/Picture1.png" alt="" className="col-start-3 row-start-4 col-span-4 mt-20"/>
    </section>
  )
}

function Research() {
  return(
    <>
    <section className="Alinhamento8">
      <div className="col-start-2 col-span-6 space-y-8">
        <p className="text-3xl"><strong>Research</strong></p>
        <p className="text-2xl">The client already had a website but not yet launched. He wanted to update the website design according to business and consumer needs as well as promote content, news related to the insurance market.</p>
      </div>
      <div className="col-start-3 col-span-4 space-y-20 mt-20">
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
    <section className="Alinhamento8 space-y-8">
      <p className="col-start-2 text-3xl col-span-2"><strong>Competitor Analysis</strong></p>
      <img src="/Pictures/RettaSeguros/Competitor/Picture1.png" alt="" className="col-start-3 row-start-2 col-span-3"/>
    </section>
    </>
  )
}

function DesignAtual() {
  return (
    <section className="Alinhamento8 space-x-6 gap-x-12 gap-y-6 mt-20">
      <p className="col-start-2 text-2xl col-span-2"><strong>Current Design: Retta Seguros</strong></p>
      <img src="/Pictures/RettaSeguros/Design-Atual/Superior-Esquerda.png" alt="Foto" className="CurrentDesign-Esquerda"/>
      <img src="/Pictures/RettaSeguros/Design-Atual/Superior-Direita.png" alt="Foto" className="CurrentDesign-Direita"/>
      <img src="/Pictures/RettaSeguros/Design-Atual/Inferior-Esquerda.png" alt="Foto" className="CurrentDesign-Esquerda row-start-3" />
      <img src="/Pictures/RettaSeguros/Design-Atual/Inferior-Direita.png" alt="Foto" className="CurrentDesign-Direita row-start-3" />
    </section>
  )
}
  
function Evaluation() {
  return (
    <section className="Alinhamento8 text-2xl mt-32 gap-6">
      <p className="col-start-2 col-span-2"><strong>Heuristics Evaluation </strong></p>
      <div className="col-start-2 col-span-4">
        <ins>Aesthetics and minimalist design: Bad</ins>
        <ul>
          <li>
            <p className="">A lot of information on the home and insurance information page</p>
          </li>
        </ul>
      </div>

      <div className="col-start-2 col-span-4">
        <ins>Consistency and Standardization: Bad</ins>
        <ul>
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
      <section>
        <p><strong>Design</strong></p>
        <div>
          <img src="/Pictures/RettaSeguros/Design/Picture1.png" alt="" />
          <img src="/Pictures/RettaSeguros/Design/Picture2.png" alt="" />
        </div>
        <div>
          <img src="/Pictures/RettaSeguros/Design/Superior-Esquerdo.png" alt="Foto1" />
          <img src="/Pictures/RettaSeguros/Design/Superior-Meio.png" alt="Foto2" />
          <img src="/Pictures/RettaSeguros/Design/Superior-Direito.png" alt="Foto3" />
        </div>

        <div>
          <img src="/Pictures/RettaSeguros/Design/Inferior-Esquerdo.png" alt="Foto4" />
          <img src="/Pictures/RettaSeguros/Design/Inferior-Direito.png" alt="Foto5" />
        </div>

        <ul>
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
      <section>
        <p><strong>Design System</strong></p>
        <img src="/Pictures/RettaSeguros/Design-System/Picture.png" alt="Picture1" />
        <div>
          <p><strong>What I learned and next steps...</strong></p>
          <ul>
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