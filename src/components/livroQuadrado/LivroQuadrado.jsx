import { Link } from "react-router-dom";

export default function LivroQuadrado({ livro }) {

    return (
        <div className="container my-5">

            <Link className="btn btn-outline-secondary btn-sm mb-3" to="/catalogo">
                ← Voltar
            </Link>

            <div className="row justify-content-center mb-5">
                <div className="col-md-8">
                    <div className="card shadow-sm p-4">

                        <div className="text-center mb-4">
                            <img
                                src={livro.imagem}
                                alt={livro.titulo}
                                className="img-fluid rounded"
                                style={{ maxHeight: "400px" }}
                            />
                        </div>

                        <h2>{livro.titulo}</h2>

                        <h5 className="text-muted">
                            Por {livro.autor}
                        </h5>

                        <h6>
                            Categoria: {livro.categoria}
                        </h6>

                        <h6>
                            Faixa Etária: {livro.faixa_etaria}
                        </h6>

                        <p className="mt-3">
                            {livro.descricao}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}