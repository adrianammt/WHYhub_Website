import Footer from "../components/Footer";
import Separador from "../components/Separador";
import "./QuienesSomos.css"

export default function QuienesSomos(){
    return (
    <>
    <section className="Heroshot">
    <div className="Heroshot-text">
    <h1 className="Tagline">Innovación al servicio de la comunidad</h1>
    <p className="Descripcion">Somos una comunidad de investigadores y gestores que desarrollamos diseños centrados en el usuario, investigamos y evaluamos proyectos del sector social y humanitario.</p>
    </div>
    <div className="ImagenInicio">The truth is human</div>
    </section>
    <Separador
    texto="&quot;Preguntamos para co-crear soluciones centradas en las personas.&quot;"/>
        <section className="Contenido">
        <h2 className="Title">Historia - WHY we came to be</h2>
        <p className="Descripcion">Los problemas sociales son complejos y para resolverlos necesitamos hacer preguntas desde distintas perspectivas, desde distintas disciplinas y públicos (investigadores/as, gestores/as, ciudadanas/os, entre otros).  
Necesitamos hacer preguntas que rompan la inercia de las soluciones comunes.  Latinoamérica ha cambiado pero seguimos haciendo las mismas preguntas y aplicando las mismas respuestas que hace 40 años.</p>
    </section>
    <Separador  texto="&quot;Lorem lorem lorem lorem&quot;"/>
    <section className="Contenido">
        <h2 className="Title">Nuestra Misión</h2>
        <p className="Descripcion">Potenciar el impacto que tienen las organizaciones sociales en Latinoamerica.</p>
        <ul>
        <li>Queremos cristalizar la utopía de un presente más empático, mas solidario, mas colectivo: más humano.</li>
        <li>Queremos encontrar soluciones innovadoras a los problemas sociales que se atienden desde las organizaciones privadas y públicas, creando una comunidad reflexiva y multidisciplinaria.</li>
        <li>Queremos crear una comunidad donde cada investigador o gestor mire e interpele la realidad desde distintas perspectivas y haciéndole preguntas disonantes.</li>
        </ul>
    </section>
    <Footer/>
    </>
    )
}