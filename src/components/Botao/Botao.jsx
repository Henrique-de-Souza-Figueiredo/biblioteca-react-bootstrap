import css from "./Botao.module.css"

export default function Botao ({conteudo}) {
    return (
            <div>
                <button className={css.botao}>{conteudo}</button>
            </div>
    )
}