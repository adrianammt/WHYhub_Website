import Footer from "../components/Footer";
import Separador from "../components/Separador";
import "./QuienesSomos.css"
import Tree from "../assets/fayeCornishUnsplash.jpg"
import Mural from "../assets/VicenteMural.jpeg"

export default function QuienesSomos(){
    return (
    <>
    <section className="Heroshot PicRight">
    <div className="Heroshot-text Left">
    <h1 className="Title">Innovación al servicio de la comunidad</h1>
    <p className="Parrafo">Somos una comunidad de investigadores y gestores que conecta múltiples disciplinas, enfoques y maneras de acercarse a la realidad.</p>
    <p className="Parrafo">Co-Creamos junto a las organizaciones soluciones efectivas, partiendo de preguntas agudas e informadas y de un diagnóstico que representa la complejidad de los problemas que abordan y los contextos en los que se desarrollan.</p>
    <p className="Parrafo">Brindamos a las organizaciones un diagnóstico comprehensivo y soluciones accionables.</p>
    </div>
    <div className="ImagenInicio">
        <img src={Tree} alt="Foto de un arbol" className="Imagen"/>
    </div>
    </section>
    <Separador
    texto="&quot;Preguntamos para co-crear soluciones centradas en las personas.&quot;"/>
    <section className="Heroshot PicLeft">
            <div className="ImagenInicio">  <img src={Mural} alt="Vicente en un mural" className="Imagen"/></div>
            <div className="Heroshot-text Right">
                <h2 className="Title">Historia - WHY we came to be</h2>
                <p className="Parrafo">La Latinoamérica de hoy no es la misma que hace 40 años, sin embargo seguimos haciendo las mismas preguntas y aplicando las mismas soluciones.</p>
                <p className="Parrafo">Los problemas sociales son complejos y para resolverlos necesitamos traer a la discusión distintas perspectivas, desde distintas disciplinas y públicos (investigadores/as, gestores/as, ciudadanas/os, entre otros).</p>
                <p className="Parrafo">Necesitamos hacer preguntas que rompan la inercia de las soluciones comunes.</p>
            </div>
            </section>  
       
        
        
          
    

    <Separador  texto="&quot;Somos una red neuronal social que conecta y fusiona múltiples enfoques y perspectivas.&quot;"/>
    <section className="Contenido">
        <h2 className="Title">Nuestra Misión</h2>
        <ul>
        <li className="Parrafo">Queremos cristalizar la utopía de un presente más empático, mas solidario, mas colectivo: más humano.</li>
        <li className="Parrafo">Queremos encontrar soluciones innovadoras a los problemas sociales que se atienden desde las organizaciones privadas y públicas, creando una comunidad reflexiva y multidisciplinaria.</li>
        <li className="Parrafo">Queremos crear una comunidad donde cada investigador o gestor mire e interpele la realidad desde distintas perspectivas y haciéndole preguntas disonantes.</li>
        </ul>
    </section>
    <section className="Fundamentos">
    <h2 className="TitleW">Fundamentos</h2>
    </section>
    <section className="Contenido">
    <h2 className="Title">Nuestro Equipo</h2>
    <div className="Colega"></div>
    <div className="FotoColega"></div>
    <div>
    <h3 className="Parrafo">Susana Chang Espino</h3>
    <p className="Parrafo">Creo que la solución a los problemas sociales está en las personas que los viven.</p>
    <p className="Parrafo">Me he formado en distintas disciplinas como la economía, antropología, implementación de enfoques como género o interculturalidad, gestión de investigaciones y de proyectos de desarrollo, gestión de empresas para poder entender la realidad.</p>
<p className="Parrafo">Más sobre mi (LinkedIn)</p>
    </div>
    <div className="Colega"></div>
    <div className="FotoColega"></div>
    <div>
    <h3 className="Parrafo">Vicente Sotelo</h3>
    <p className="Parrafo">Entusiasmado por mi destreza con los números estudié Ingeniería, pero luego de tres años me dí cuenta que no podía dejar de leer acerca de Humanidades y Ciencias Sociales, así que decidí hacerle caso a mi curiosidad y cambie de carrera  a Economía.
    </p><p className="Parrafo">Exploro, pregunto, diseño mido, testeo y vuelvo a preguntar. Me he especializado en la gestión de proyectos intensivos en data para el sector privado, público y ONG. He liderado dos laboratorios de innovación en el Perú con el propósito de generar evidencia para la toma de decisiones. Y hasta hace poco fuí Gerente de Monitoreo, Evaluación y Aprendizaje en Aflatoun en Amsterdam en dónde lídere un equipo resposansable de un portafolio proyectos de M&amp;E distribuidos en Latinoamerica, el Este Asiático, Africa y el Este de Europa.</p>
    <p className="Parrafo">Más sobre mi (LinkedIn)</p>
    </div>
    </section>
    <Footer/>
    </>
    )
}