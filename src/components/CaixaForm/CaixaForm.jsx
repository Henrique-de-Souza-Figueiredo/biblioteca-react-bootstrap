import css from "./CaixaForm.module.css"
import {Link} from "react-router-dom";

export default function CaixaForm({ acao, titulo, children }) {
    return (
        <div className={`container-fluid ${css.formBg} d-flex justify-content-center align-items-center vh-100`}>

            <div className={`card ${css.formCard} p-4 shadow`}>

                <h3 className={`text-center mb-4 ${css.formTitle}`}>
                    {titulo}
                </h3>

                <div className={css.formContent}>
                    {children}
                </div>

                <div className="d-flex justify-content-end mt-3">
                    <Link to="/catalogo" className={`btn ${css.corbtn}`}>
                        {acao}
                    </Link>
                </div>

            </div>

        </div>
    )
}