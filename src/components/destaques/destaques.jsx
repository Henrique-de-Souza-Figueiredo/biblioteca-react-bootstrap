import css from "./destaques.module.css"

export default function Destaques() {
    return (
        <div className={"container mt-5"}>
            <div className={"row"}>
                <div className={"col-12 d-flex align-items-center"}>
                    <p className={'d-flex align-items-center'}><span className={css.tracinho}></span>
                        <span className={css.novidades}>NOVIDADES</span></p>
                </div>
                <div className={"container d-md-flex justify-content-between align-items-center mb-2 "}>
                    <div>
                        <h1 className={css.semana}>Destaques da Semana</h1>
                    </div>
                    <div>
                        <select className={'p-2 rounded-5'}>
                            <option>Ordenar pro: Relevância</option>
                            <option>Mais recentes</option>
                            <option>Menor preço</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>

    );
}