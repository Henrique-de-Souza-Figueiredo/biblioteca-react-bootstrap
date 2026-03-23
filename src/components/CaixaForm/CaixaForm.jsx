import css from "./CaixaForm.module.css"


export default function CaixaForm({ titulo, children }) {
    return (
        <div className={`container-fluid ${css.formBg} d-flex justify-content-center align-items-center vh-100`}>

            <div className={`card ${css.formCard} p-4 shadow`}>

                <h3 className={`text-center mb-4 ${css.formTitle}`}>
                    {titulo}
                </h3>

                <div className={css.formContent}>
                    {children}
                </div>

            </div>

        </div>
    )
}