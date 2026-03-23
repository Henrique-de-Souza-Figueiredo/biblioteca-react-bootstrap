import css from "./Botao.module.css"

export default function Botao3({ conteudo, onClick }) {
    return (
        <div>
            <button
                className={css.botao3}
                onClick={onClick}
            >
                {conteudo}
            </button>
        </div>
    )
}