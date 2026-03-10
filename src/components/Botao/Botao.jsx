import css from "./Botao.module.css"
import { Link } from "react-router-dom";

export default function Botao ({conteudo, usarCss, link}) {
    return (
        <div className={usarCss ? css.containerDiv : "d-flex justify-content-center align-items-center mb-3 mb-t"}>
            <Link to={link} className={css.botao}>
                {conteudo}
            </Link>
        </div>
    )
}