import css from "./destaques.module.css"

export default function Destaques({titulo, inp, setInp}) {

    return (
        <div className={"container mt-5"}>
            <div className={"row"}>
                <div className={"col-12 d-flex align-items-center"}>
                    <p className={'d-flex align-items-center'}><span className={css.tracinho}></span>
                        <span className={css.novidades}>NOVIDADES</span></p>
                </div>
                <div className={"container d-md-flex justify-content-between align-items-center mb-2 "}>
                    <div>
                        <h1 className={css.semana}>{titulo}</h1>
                    </div>
                    <div className="mb-3">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Buscar..."
                            value={inp} onChange={(e) =>setInp(e.target.value)}
                        />
                    </div>
                    <div>

                    </div>

                    <div>

                        <select className={'p-2 rounded-5'}>
                            <option>Ordenar por: Relevancia</option>
                            <option>Mais Recentes</option>
                            <option>Menor Preço</option>

                        </select>
                    </div>
                </div>

            </div>
        </div>

    );
}