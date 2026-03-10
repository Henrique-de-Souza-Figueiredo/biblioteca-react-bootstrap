import {Link} from "react-router-dom";

export default function LivroQuadrado() {
    const livros = [
        {
            titulo: "O Silêncio do Mar",
            autor: "Helena Vasconcelos",
            tipo: "Poesia",
            faixa: "16+",
            imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfPUvluJk-HiK0Px5gMH_BQBTb27qwJ60GGLCTrpOAAYFz8ODYpVVOV2O3H0-BSlmEa2ohe6ftiet7tpJzzXqwrqqUor68qTw-bwD1uGjhWJcvHsWClI0VuBYce5rxZwgBVQV4bhHqPxrEBM3LkzshPTJe7ieqD4TS1WBM3tBpYhGbRcqANDyZcqO8gLGClOuhnWi0GrUe89miMPaSuLf43oTjqYI0bFS_SBPM5Oh-f_SIfyjMhezNzi5D1Mv_gaT50wKuwIsP8bdt",
            sinopse: "Uma coletânea de poemas que explora os sentimentos mais profundos e silenciosos da alma humana, mostrando a força da poesia em momentos de introspecção."
        }
    ];

    return (
        <div className="container my-5">
            <Link className="btn btn-outline-secondary btn-sm mb-3" to="/catalogo">
                ← Voltar
            </Link>
            {livros.map((livro, index) => (
                <div key={index} className="row justify-content-center mb-5">
                    <div className="col-md-8">
                        <div className="card shadow-sm p-4">

                            {livro.imagem && (
                                <div className="text-center mb-4">
                                    <img
                                        src={livro.imagem}
                                        alt={`Capa de ${livro.titulo}`}
                                        className="img-fluid rounded"
                                        style={{ maxHeight: "400px" }}
                                    />
                                </div>
                            )}

                            <h2 className="mb-2">{livro.titulo}</h2>

                            <h5 className="text-muted mb-2">Por {livro.autor}</h5>

                            {livro.tipo && (
                                <h6 className="text-secondary mb-4">Tipo: {livro.tipo}</h6>
                            )}


                            {livro.faixa && (
                                <h6 className="text-secondary mb-4">Faixa Etária: {livro.faixa}</h6>
                            )}

                            <p>{livro.sinopse}</p>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}