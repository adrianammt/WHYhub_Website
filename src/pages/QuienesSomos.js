import Footer from "../components/Footer";
import Separador from "../components/Separador";
import "./QuienesSomos.css"

export default function QuienesSomos(){
    return (
    <>
    <section className="Heroshot">
    <div className="Heroshot-text">
    <h1 className="Tagline">Innovación al servicio de la comunidad</h1>
    <p className="Descripcion">The Why Hub ayuda a las organizaciones a maximizar su impacto en la sociedad, contruyendo con ellas soluciones centradas en los y las usuarias de los servicios que entregan.</p>
    <p className="Descripcion">Partimos de la premisa que son las personas quienes tienen las soluciones a sus propios problemas y cómo cientificos sociales ayudamos a construir un camino que nos ayude a incorporarlas en el diseño, implementación y evaluación de los servicios dirigidos a los y las ciudadanas.</p>
    </div>
    <div className="ImagenInicio">The truth is human</div>
    </section>
    <Separador
    texto="&quot;Lorem lorem lorem&quot;"/>
    <section className="Mision">
        <h2 className="Title">Nuestra Misión</h2>
        <p className="Descripcion">Potenciar el impacto que tienen las organizaciones sociales en Latinoamerica. Queremos que cada recurso humano, monetario y de tiempo invertido mejore la vida de en la población mas vulnerable de la región.</p>
    </section>
    <Separador/>
    <Footer/>
    </>
    )
}