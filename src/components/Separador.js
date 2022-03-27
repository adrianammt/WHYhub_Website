import "./Separador.css"

export default function Separador({texto=""}){
    return(
        <div className="Separador">
            <p className="Separador-texto">{texto}</p>
        </div>
    )
}